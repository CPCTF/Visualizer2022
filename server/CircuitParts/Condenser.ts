import type { ProblemCategory } from '../../src/circuit/BothScript/CircuitInfo'
import { CircuitParts } from '../CircuitParts'
export class Condenser extends CircuitParts {
  public sizeX = 1
  public sizeY = 1
  public wirePointsInts: number[][] = new Array(this.sizeY * this.sizeX)
  public problemCategory: ProblemCategory = 'Web'
  constructor(isBig: boolean) {
    super(isBig)
    this.wirePointsInts.forEach(
      (_, i) => (this.wirePointsInts[i] = new Array(32))
    )
    //x=0,y=0のcellのwirePoints
    this.wirePointsInts[0 + 0 * this.sizeX] = [
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
  }
}
