import { CircuitInfoUtils } from '../BothScript/CircuitInfo'
import { Basis } from './Basis'
import { TestParts } from './CircuitParts/TestParts'
export class ServerTester {
  private sizeX = 50
  private sizeY = 50
  private basis: Basis
  constructor() {
    this.basis = new Basis(this.sizeX, this.sizeY)
  }

  //基盤部品の配置
  GetJson(): string {
    const testParts = new TestParts(false)
    //trueが帰らないとおかしい
    this.basis.PutParts(25, 25, testParts)
    const partsCells = this.basis.GetPartsCells(testParts)
    partsCells.forEach(v => this.basis.ExtendWires(v))
    const [basisInfo, partsInfos, wiresInfos] =
      this.basis.ConvertToCircuitInfos()
    console.log(basisInfo)
    console.log(partsInfos)
    console.log(wiresInfos) //considered Array(0以上)
    return CircuitInfoUtils.InfoToJson(basisInfo, partsInfos, wiresInfos)
  }
}
