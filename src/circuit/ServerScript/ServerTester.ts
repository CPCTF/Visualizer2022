import { CircuitInfoUtils } from '../BothScript/CircuitInfo'
import { Basis } from './Basis'
import { Condenser } from './CircuitParts/Condenser'
import { CPU } from './CircuitParts/CPU'
import { GraphicBoard } from './CircuitParts/GraphicBoard'
export class ServerTester {
  private sizeX = 50
  private sizeY = 50
  private basis: Basis
  constructor() {
    this.basis = new Basis(this.sizeX, this.sizeY)
  }

  //基盤部品の配置
  getJson(): string {
    const cpu = new CPU(false)
    const condenser = new Condenser(false)
    const graphicBoard = new GraphicBoard(false)
    this.basis.putParts(24, 24, cpu)
    this.basis.putParts(23, 23, condenser)
    this.basis.putParts(26, 23, graphicBoard)
    const cpuCells = this.basis.getPartsCells(cpu)
    const condenserCells = this.basis.getPartsCells(condenser)
    const graphicBoardCells = this.basis.getPartsCells(graphicBoard)
    cpuCells.forEach(v => this.basis.extendWires(v))
    condenserCells.forEach(v => this.basis.extendWires(v))
    graphicBoardCells.forEach(v => this.basis.extendWires(v))
    const [basisInfo, partsInfos, wiresInfos] =
      this.basis.convertToCircuitInfos()
    console.log(basisInfo)
    console.log(partsInfos)
    console.log(wiresInfos)
    return CircuitInfoUtils.infoToJson(basisInfo, partsInfos, wiresInfos)
  }
}
