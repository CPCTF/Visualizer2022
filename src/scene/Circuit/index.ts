import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { CircuitWireObject } from './Parts/CircuitWireObject'
import { ThreeResourceLoader } from '#/system/Loader'
import { Mesh, Vector3 } from 'three'
import { CircuitModelPath } from '#/circuit/CliantScript/CircuitModelPath'
import { SubmissionEffect } from './SubmissionEffect'
import { CircuitManager } from '#/circuit/CliantScript/CircuitManager'
import { EventEmitter } from '#/system/EventEmitter'
import type { QuestionGenre } from '#/system/ResponseType'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import jsonSrc from '../../../public/circuit.json'
import {
  CircuitBasisInfo,
  CircuitInfoUtils,
  CircuitPartsInfo,
  CircuitWiresInfo
} from '#/circuit/BothScript/CircuitInfo'

export class Circuit extends VisualizerGroup {
  private objectPool: Record<string, [Array<Mesh>, number]> = {}
  constructor() {
    super()
    this.add(new SubmissionEffect())
  }

  public start(): void {
    super.start()
    this.setPrefabs()
    this.position.add(new Vector3(0, 0.1, 0))
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

  //サーバーから送られてきたCircuitInfoを元に設置
  createCircuit(): void {
    const isDebug = false
    let [basisInfo, partsInfos, wiresInfos]: [
      CircuitBasisInfo,
      CircuitPartsInfo[],
      CircuitWiresInfo[]
    ] = CircuitManager.getCircuitInfo()
    if (isDebug) {
      ;[basisInfo, partsInfos, wiresInfos] = CircuitInfoUtils.jsonToInfo(
        JSON.stringify(jsonSrc)
      )
    }
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

    //グリッド線を表示
    /*
    if (isDebug) {
      const geometry = new PlaneGeometry(
        basisInfo.sizeX,
        basisInfo.sizeY,
        basisInfo.sizeX,
        basisInfo.sizeY
      )
      geometry.rotateX(-Math.PI / 2)
      const material = new MeshPhongMaterial({
        color: 0xffffff,
        wireframe: true
      })
      const mesh = new Mesh(geometry, material)
      mesh.position.add(new Vector3(0.5, 0, 0.5))
      this.add(mesh)
    }*/
  }
  private setPrefabs(): void {
    //cpu
    const cpuPrefab = ThreeResourceLoader.get(
      CircuitModelPath.cpuPath
    )?.clone() as Mesh
    cpuPrefab.visible = false
    this.objectPool['CPU'] = [[cpuPrefab], 1]
    this.add(cpuPrefab)
    //big parts
    for (const key in CircuitModelPath.partsBigPath) {
      const prefab = ThreeResourceLoader.get(
        CircuitModelPath.partsBigPath[key as QuestionGenre]
      )?.clone() as Mesh
      if (prefab == undefined) continue
      prefab.visible = false
      prefab.scale.set(2, 2, 2)
      this.objectPool['Big' + key] = [[prefab], 1]
      this.add(prefab)
    }
    //parts
    for (const key in CircuitModelPath.partsPath) {
      const prefab = ThreeResourceLoader.get(
        CircuitModelPath.partsPath[key as QuestionGenre]
      )?.clone() as Mesh
      if (prefab == undefined) continue
      prefab.visible = false
      this.objectPool[key] = [[prefab], 1]
      this.add(prefab)
    }
    //wire
    const createWirePrefab = (wire: [number, number]) => {
      const pref = new CircuitWireObject(wire)
      const prefab = new Mesh(pref.geometry, pref.material)
      prefab.visible = false
      this.objectPool['Wire' + wire.toString()] = [[prefab], 1]
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
    if (this.objectPool[key] == undefined) return undefined
    const [objs, i] = this.objectPool[key]
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
    this.objectPool[key] = [objs, newi]
    return res
  }
  private removeAllObject(): void {
    for (const key in this.objectPool) {
      this.objectPool[key][0].forEach(obj => (obj.visible = false))
      this.objectPool[key][1] = 1
    }
  }
}
