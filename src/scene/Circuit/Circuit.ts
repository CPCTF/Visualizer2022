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
import type { Object3D } from 'three'
import { CircuitModelPath } from '#/circuit/CliantScript/CircuitModelPath'

export class Circuit extends VisualizerGroup {
  constructor() {
    super()
    const [basisInfo, partsInfos, wiresInfos] = this.TestData()
    console.log(basisInfo)
    console.log(partsInfos)
    console.log(wiresInfos)
    this.ImportCircuitInfo(basisInfo, partsInfos, wiresInfos)
  }

  public start(): void {
    super.start()
  }

  public update(): void {
    super.update()
  }

  //サーバーから送られてきたCircuitInfoを元に設置
  ImportCircuitInfo(
    circuitBasisInfo: CircuitBasisInfo,
    circuitPartsInfos: CircuitPartsInfo[],
    circuitWiresInfos: CircuitWiresInfo[]
  ): void {
    circuitPartsInfos.forEach(v => {
      let path = ''
      if (v.isBig) {
        path = CircuitModelPath.partsBigPath[v.category as ProblemCategory]
      } else {
        path = CircuitModelPath.partsPath[v.category as ProblemCategory]
      }
      const obj = ThreeResourceLoader.get(path) as Object3D
      obj.position.set(v.x, 0, v.z)
      this.add(obj)
    })
    circuitWiresInfos.forEach(v => {
      const wire = new CircuitWireObject(v.wires)
      wire.position.set(v.x, 0, v.z)
      this.add(wire)
    })
    const offsetX = -circuitBasisInfo.sizeX / 2
    const offsetY = 0
    const offsetZ = -circuitBasisInfo.sizeY / 2
    this.position.set(offsetX, offsetY, offsetZ)
  }

  TestData(): [CircuitBasisInfo, CircuitPartsInfo[], CircuitWiresInfo[]] {
    const serverTester = new ServerTester()
    const json = serverTester.GetJson()
    console.log(json)
    return CircuitInfoUtils.JsonToInfo(json)
  }
}
