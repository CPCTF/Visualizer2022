import { CircuitParts } from '../CircuitParts'
import type { Genre } from '../ServerMain'
export class GraphicBoard extends CircuitParts {
  public sizeX = 1
  public sizeY = 6
  public wirePointsInts: number[][] = new Array(this.sizeY * this.sizeX)
  public problemCategory: Genre = 'OSINT'
  constructor(isBig: boolean) {
    super(isBig)
    this.wirePointsInts.forEach(
      (_, i) => (this.wirePointsInts[i] = new Array(32))
    )
    //x=0,y=0のcellのwirePoints
    this.wirePointsInts[0 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0
    ]
    this.wirePointsInts[0 + 1 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 1, 0, 1, 0
    ]
    this.wirePointsInts[0 + 2 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 1, 0, 1, 0
    ]
    this.wirePointsInts[0 + 3 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 1, 0, 1, 0
    ]
    this.wirePointsInts[0 + 4 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 1, 0, 1, 0
    ]
    this.wirePointsInts[0 + 5 * this.sizeX] = [
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 1, 0, 1, 0
    ]
    this.setBigWirePointsInts()
  }
}
