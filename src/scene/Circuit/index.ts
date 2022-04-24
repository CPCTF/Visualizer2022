import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { CircuitWireObject } from './Parts/CircuitWireObject'
import { ThreeResourceLoader } from '#/system/Loader'
import { Mesh, MeshPhongMaterial, PlaneGeometry, Vector3 } from 'three'
import { CircuitModelPath } from '#/circuit/CliantScript/CircuitModelPath'
import { SubmissionEffect } from './SubmissionEffect'
import { CircuitManager } from '#/circuit/CliantScript/CircuitManager'
import { EventEmitter } from '#/system/EventEmitter'
import type { QuestionGenre } from '../../system/ResponseType'

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
    const [basisInfo, partsInfos, wiresInfos] = CircuitManager.getCircuitInfo()
    console.log(basisInfo, partsInfos, wiresInfos)
    const offsetX = -basisInfo.sizeX / 2 - 0.5
    const offsetY = 0
    const offsetZ = -basisInfo.sizeY / 2 - 0.5

    partsInfos.forEach(v => {
      let key = ''
      //問題種類と結びついてついていないパーツ
      if (v.category == '') {
        key = 'CPU'
      } else {
        if (v.isBig) {
          key = 'Big' + v.category
        } else {
          key = v.category
        }
      }

      const obj = this.createObject(key)
      if (obj != undefined) {
        obj.position.set(v.x + offsetX, 0 + offsetY, v.z + offsetZ)
      }
    })
    wiresInfos.forEach(v => {
      const wire = new CircuitWireObject(v.wires)
      wire.position.set(v.x + offsetX, 0 + offsetY, v.z + offsetZ)
      this.add(wire)
    })

    //グリッド線を表示
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
    }
  }
  private setPrefabs(): void {
    const cpuPrefab = ThreeResourceLoader.get(CircuitModelPath.cpuPath) as Mesh
    cpuPrefab.visible = false
    this.objectPool['CPU'] = [[cpuPrefab], 1]
    this.add(cpuPrefab)
    for (const key in CircuitModelPath.partsBigPath) {
      const prefab = ThreeResourceLoader.get(
        CircuitModelPath.partsBigPath[key as QuestionGenre]
      ) as Mesh
      if (prefab == undefined) continue
      prefab.visible = false
      this.objectPool['Big' + key] = [[prefab], 1]
      this.add(prefab)
    }
    for (const key in CircuitModelPath.partsPath) {
      const prefab = ThreeResourceLoader.get(
        CircuitModelPath.partsPath[key as QuestionGenre]
      ) as Mesh
      if (prefab == undefined) continue
      prefab.visible = false
      this.objectPool[key] = [[prefab], 1]
      this.add(prefab)
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
