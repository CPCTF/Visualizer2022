import { VisualizerGroup } from '#/templates/VisualizerGroup'
import {
  CircuitBasisInfo,
  CircuitInfoUtils,
  CircuitPartsInfo,
  CircuitWiresInfo,
  ProblemCategory
} from '../../circuit/BothScript/CircuitInfo'
import { CircuitWireObject } from './Parts/CircuitWireObject'
import { ServerTester } from '../../circuit/ServerScript/ServerTester'
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

export class Circuit extends VisualizerGroup {
  constructor() {
    super()
    const [basisInfo, partsInfos, wiresInfos] = this.testData()
    console.log(basisInfo)
    console.log(partsInfos)
    console.log(wiresInfos)
    this.importCircuitInfo(basisInfo, partsInfos, wiresInfos, false)
    this.add(new SubmissionEffect())
    this.position.add(new Vector3(0, 0.1, 0))
  }

  public start(): void {
    super.start()
  }

  public update(): void {
    super.update()
  }

  //サーバーから送られてきたCircuitInfoを元に設置
  importCircuitInfo(
    circuitBasisInfo: CircuitBasisInfo,
    circuitPartsInfos: CircuitPartsInfo[],
    circuitWiresInfos: CircuitWiresInfo[],
    isDebug: boolean
  ): void {
    const offsetX = -circuitBasisInfo.sizeX / 2 + 0.5
    const offsetY = 0
    const offsetZ = -circuitBasisInfo.sizeY / 2 + 0.5

    circuitPartsInfos.forEach(v => {
      let path = ''
      if (v.isBig) {
        path = CircuitModelPath.partsBigPath[v.category as ProblemCategory]
      } else {
        path = CircuitModelPath.partsPath[v.category as ProblemCategory]
      }
      const obj = ThreeResourceLoader.get(path) as Object3D
      obj.position.set(v.x + offsetX, 0 + offsetY, v.z + offsetZ)
      //パーツを見えなくする
      if (isDebug) obj.scale.set(0, 0, 0)
      this.add(obj)
    })
    circuitWiresInfos.forEach(v => {
      const wire = new CircuitWireObject(v.wires)
      wire.position.set(v.x + offsetX, 0 + offsetY, v.z + offsetZ)
      this.add(wire)
    })
    //グリッド線を表示
    if (isDebug) {
      const geometry = new PlaneGeometry(
        circuitBasisInfo.sizeX,
        circuitBasisInfo.sizeY,
        circuitBasisInfo.sizeX,
        circuitBasisInfo.sizeY
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

  testData(): [CircuitBasisInfo, CircuitPartsInfo[], CircuitWiresInfo[]] {
    const serverTester = new ServerTester()
    const json = serverTester.getJson()
    console.log(json)
    return CircuitInfoUtils.jsonToInfo(json)
  }
}
