import type { ProblemCategory } from '../BothScript/CircuitInfo'

export abstract class CircuitParts {
  abstract sizeX: number
  abstract sizeY: number
  abstract wirePointsInts: number[][]
  abstract problemCategory: ProblemCategory
  public id: number
  static counter = 0
  public isBig: boolean
  private x = 0
  private y = 0
  constructor(isBig: boolean) {
    this.isBig = isBig
    this.id = CircuitParts.counter
    CircuitParts.counter++
  }

  GetWirePointsInt(x: number, y: number): number[] | undefined {
    return this.wirePointsInts[x + y * this.sizeX]
  }

  GetPosition(): [number, number] {
    return [this.x, this.y]
  }
  SetPosition(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
