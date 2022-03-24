import type { ProblemCategory } from '#/circuit/BothScript/CircuitInfo'
import { CircuitParts } from '../CircuitParts'
export class TestParts extends CircuitParts {
  public sizeX = 1
  public sizeY = 1
  public wirePointsInts: number[][] = new Array(this.sizeY * this.sizeX)
  public problemCategory: ProblemCategory = 'None'
  constructor(isBig: boolean) {
    super(isBig)
    //x=0,y=0のcellのwirePoints
    this.wirePointsInts[0 + 0 * this.sizeX] = [
      1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
  }
}
