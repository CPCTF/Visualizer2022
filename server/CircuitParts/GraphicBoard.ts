import type { ProblemCategory } from '../../src/circuit/BothScript/CircuitInfo'
import { CircuitParts } from '../CircuitParts'
export class GraphicBoard extends CircuitParts {
  public sizeX = 1
  public sizeY = 6
  public wirePointsInts: number[][] = new Array(this.sizeY * this.sizeX)
  public problemCategory: ProblemCategory = 'Reversing'
  constructor(isBig: boolean) {
    super(isBig)
    this.wirePointsInts.forEach(
      (_, i) => (this.wirePointsInts[i] = new Array(32))
    )
    //x=0,y=0のcellのwirePoints
    this.wirePointsInts[0 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
    this.wirePointsInts[1 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
    this.wirePointsInts[2 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
    this.wirePointsInts[3 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
    this.wirePointsInts[4 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
    this.wirePointsInts[5 + 0 * this.sizeX] = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
  }
}
