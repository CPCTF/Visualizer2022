import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { CircuitWireObject } from './Parts/CircuitWireObject'
import { ThreeResourceLoader } from '#/system/Loader'
import { Box3, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three'
import { CircuitModelPath } from '#/circuit/CliantScript/CircuitModelPath'
import { SubmissionEffect } from './SubmissionEffect'
import { CircuitManager } from '#/circuit/CliantScript/CircuitManager'
import { EventEmitter } from '#/system/EventEmitter'
import { QuestionGenre, QuestionGenreList } from '#/system/ResponseType'
import type {
  CircuitBasisInfo,
  CircuitPartsInfo,
  CircuitWiresInfo
} from '#/circuit/BothScript/CircuitInfo'

export class Circuit extends VisualizerGroup {
  private static objectPool: Record<string, [Array<Mesh>, number]> = {}
  private basisPlane: Mesh
  private readonly maxBasisScale = 1
  private readonly basisSize = 13
  public static currentBasisScale = 1
  public static randomPartsObjectKeys: Array<string>
  public static randomIndex = 0
  constructor() {
    super()
    Circuit.randomPartsObjectKeys = new Array(QuestionGenreList.length * 2)
      .fill('')
      .map((_, i) => {
        if (i < QuestionGenreList.length) {
          return QuestionGenreList[i]
        } else {
          return 'Big' + QuestionGenreList[i - QuestionGenreList.length]
        }
      })
      .sort(() => Math.random() - 0.5)
    const plane = new Mesh(
      new PlaneGeometry(1, 1, 1, 1),
      //new MeshBasicMaterial({ color: 0x3b6141 })
      new MeshBasicMaterial({ color: 0x04270f })
    )
    plane.rotation.x = -Math.PI * 0.5
    plane.position.set(0, -0.1, 0)
    plane.scale.set(10, 10, 0)
    this.basisPlane = plane
    this.add(plane)
    this.add(new SubmissionEffect())
  }

  public start(): void {
    super.start()
    this.setPrefabs()

    EventEmitter.on('recalculatestart', () => {
      //
    })
    EventEmitter.on('recalculateend', () => {
      this.removeAllObject()
      this.createCircuit()
    })
    const obj = this.createObject('CPU') as Mesh
    obj.position.set(-0.5, 0, -0.5)
  }

  public update(): void {
    super.update()
  }

  public static getCPUBox(): Box3 | undefined {
    if (Circuit.objectPool['CPU'] == undefined) return undefined
    const objs = Circuit.objectPool['CPU'][0]
    const obj = objs[1]
    const box = new Box3().setFromObject(obj)
    return box
  }

  public static getRandomPartsBox(): Box3 | undefined {
    Circuit.randomIndex =
      (Circuit.randomIndex + 1) % (Circuit.randomPartsObjectKeys.length * 2)
    //big parts
    for (let i = 0; i < Circuit.randomPartsObjectKeys.length * 2; i++) {
      const key = Circuit.randomPartsObjectKeys[Circuit.randomIndex]
      if (Circuit.objectPool[key] == undefined) continue
      const objs = Circuit.objectPool[key][0]
      if (objs.length > 0) {
        let len = 0
        for (const obj of objs) {
          if (obj.visible) {
            len += 1
          }
        }
        if (len > 0) {
          const obj = objs[Math.floor(Math.random() * len) + 1]
          const box = new Box3().setFromObject(obj)
          return box
        } else {
          continue
        }
      }
    }
    return undefined
  }

  //サーバーから送られてきたCircuitInfoを元に設置
  private createCircuit(): void {
    const [basisInfo, partsInfos, wiresInfos]: [
      CircuitBasisInfo,
      CircuitPartsInfo[],
      CircuitWiresInfo[]
    ] = CircuitManager.getCircuitInfo()
    const basisScale = Math.min(
      this.basisSize / basisInfo.sizeX,
      this.maxBasisScale
    )
    Circuit.currentBasisScale = basisScale
    this.basisPlane.scale.set(basisInfo.sizeX + 1, basisInfo.sizeY + 1, 1)
    const offsetX = -basisInfo.sizeX / 2 - 0.5
    const offsetY = 0
    const offsetZ = -basisInfo.sizeY / 2 - 0.5

    partsInfos.forEach(v => {
      let key = ''
      let partsOffsetX = 0
      let partsOffsetZ = 0
      //問題種類と結びついてついていないパーツ
      if (v.category == '') {
        key = 'CPU'
      } else {
        if (v.isBig) {
          key = 'Big' + v.category
          partsOffsetX = 0.5
          partsOffsetZ = 0.5
        } else {
          key = v.category
        }
      }

      const obj = this.createObject(key)
      if (obj != undefined) {
        obj.position.set(
          v.x + offsetX + partsOffsetX,
          0 + offsetY,
          v.z + offsetZ + partsOffsetZ
        )
      }
    })
    wiresInfos.forEach(v => {
      v.wires.forEach(wire => {
        const wireMesh = this.createObject('Wire' + wire.toString())
        if (wireMesh != undefined) {
          wireMesh.position.set(v.x + offsetX, 0 + offsetY, v.z + offsetZ)
        }
      })
    })

    this.scale.setScalar(basisScale)
  }
  private setPrefabs(): void {
    //cpu
    const cpuPrefab = ThreeResourceLoader.get(
      CircuitModelPath.cpuPath
    )?.clone() as Mesh
    cpuPrefab.visible = false
    Circuit.objectPool['CPU'] = [[cpuPrefab], 1]
    this.add(cpuPrefab)
    //big parts
    for (const key in CircuitModelPath.partsBigPath) {
      const prefab = ThreeResourceLoader.get(
        CircuitModelPath.partsBigPath[key as QuestionGenre]
      )?.clone() as Mesh
      if (prefab == undefined) continue
      prefab.visible = false
      prefab.scale.set(2, 2, 2)
      Circuit.objectPool['Big' + key] = [[prefab], 1]
      this.add(prefab)
    }
    //parts
    for (const key in CircuitModelPath.partsPath) {
      const prefab = ThreeResourceLoader.get(
        CircuitModelPath.partsPath[key as QuestionGenre]
      )?.clone() as Mesh
      if (prefab == undefined) continue
      prefab.visible = false
      Circuit.objectPool[key] = [[prefab], 1]
      this.add(prefab)
    }
    //wire
    const createWirePrefab = (wire: [number, number]) => {
      const pref = new CircuitWireObject(wire)
      const prefab = new Mesh(pref.geometry, pref.material)
      prefab.visible = false
      Circuit.objectPool['Wire' + wire.toString()] = [[prefab], 1]
      this.add(prefab)
    }
    for (let i = 0; i < 32; i++) {
      let wire: [number, number] = [i, -1]
      createWirePrefab(wire)
      const mod = i % 8
      const shift = (i - mod) / 8
      const canTo = [15 - mod, 23 - mod, 31 - mod]
      canTo.forEach(v => {
        const newWire = (((v + 8 * shift) % 32) + 32) % 32
        wire = [i, newWire]
        createWirePrefab(wire)
      })
    }
  }

  private createObject(key: string): Mesh | undefined {
    if (Circuit.objectPool[key] == undefined) return undefined
    const [objs, i] = Circuit.objectPool[key]
    let res: Mesh
    if (i >= objs.length) {
      res = objs[0].clone()
      objs.push(res)
      this.add(res)
    } else {
      res = objs[i]
    }
    res.visible = true
    const newi = i + 1
    Circuit.objectPool[key] = [objs, newi]
    return res
  }
  private removeAllObject(): void {
    for (const key in Circuit.objectPool) {
      Circuit.objectPool[key][0].forEach(obj => (obj.visible = false))
      Circuit.objectPool[key][1] = 1
    }
  }
}
