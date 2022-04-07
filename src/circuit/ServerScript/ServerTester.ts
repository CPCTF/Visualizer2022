import { CircuitInfoUtils } from '../BothScript/CircuitInfo'
import { Basis } from './Basis'
import { Condenser } from './CircuitParts/Condenser'
import { CPU } from './CircuitParts/CPU'
import { GraphicBoard } from './CircuitParts/GraphicBoard'

export class ServerTester {
  //基盤部品の配置
  public static getJson(): string {
    const basis = new Basis(50, 50)
    const cpu = new CPU(false)
    const condenser = new Condenser(false)
    const graphicBoard = new GraphicBoard(false)
    basis.putParts(24, 24, cpu)
    basis.putParts(23, 23, condenser)
    basis.putParts(26, 23, graphicBoard)
    const cpuCells = basis.getPartsCells(cpu)
    const condenserCells = basis.getPartsCells(condenser)
    const graphicBoardCells = basis.getPartsCells(graphicBoard)
    cpuCells.forEach(v => basis.extendWires(v))
    condenserCells.forEach(v => basis.extendWires(v))
    graphicBoardCells.forEach(v => basis.extendWires(v))
    const [basisInfo, partsInfos, wiresInfos] = basis.convertToCircuitInfos()
    return CircuitInfoUtils.infoToJson(basisInfo, partsInfos, wiresInfos)
  }
}
