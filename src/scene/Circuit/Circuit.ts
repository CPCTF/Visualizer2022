import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { CircuitWireObject } from './Parts/CircuitWireObject'
import { ThreeResourceLoader } from '#/system/Loader'
import {
  Mesh,
  MeshPhongMaterial,
  Object3D,
  PlaneGeometry,
  Vector3
} from 'three'
import { CircuitModelPath } from '#/circuit/CliantScript/CircuitModelPath'
import { SubmissionEffect } from './SubmissionEffect'
import { CircuitManager } from '#/circuit/CliantScript/CircuitManager'
import { EventEmitter } from '#/system/EventEmitter'
import type { ProblemCategory } from '../../circuit/BothScript/CircuitInfo'

export class Circuit extends VisualizerGroup {
  constructor() {
    super()
    this.add(new SubmissionEffect())
    this.position.add(new Vector3(0, 0.1, 0))
  }

  public start(): void {
    super.start()
    EventEmitter.on('recalculatestart', () => {
      this.children.forEach(child => this.remove(child))
    })
    EventEmitter.on('recalculateend', () => {
      this.createCircuit()
    })
  }

  public update(): void {
    super.update()
  }

  //サーバーから送られてきたCircuitInfoを元に設置
  createCircuit(): void {
    const isDebug = true
    const [basisInfo, partsInfos, wiresInfos] = CircuitManager.getCircuitInfo()
    const offsetX = -basisInfo.sizeX / 2
    const offsetY = 0
    const offsetZ = -basisInfo.sizeY / 2

    partsInfos.forEach(v => {
      let path = ''
      if (v.isBig) {
        path = CircuitModelPath.partsBigPath[v.category as ProblemCategory]
      } else {
        path = CircuitModelPath.partsPath[v.category as ProblemCategory]
      }
      const obj = ThreeResourceLoader.get(path) as Object3D
      obj.position.set(v.x + offsetX, 0 + offsetY, v.z + offsetZ)
      this.add(obj)
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
}
