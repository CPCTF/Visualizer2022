import { Genre } from './ServerMain'

export abstract class CircuitParts {
  public sizeX = 0
  public SizeX = (): number => {
    return this.isBig ? this.sizeX * 2 : this.sizeX
  }
  public sizeY = 0
  public SizeY = (): number => {
    return this.isBig ? this.sizeY * 2 : this.sizeY
  }
  public wirePointsInts: number[][] = []
  public bigWirePointsInts: number[][] = []
  public abstract problemCategory: Genre | undefined
  public id: number
  static counter = 0
  public isBig: boolean
  private x = 0
  private y = 0

  static vscS = [3, 2, 0, 1]
  static henS = [
    [3, 0],
    [0, 1],
    [1, 2],
    [2, 3]
  ]
  static offS = [
    [16, 0],
    [4, 4],
    [8, 8],
    [12, 12]
  ]
  constructor(isBig: boolean) {
    this.isBig = isBig
    this.id = CircuitParts.counter
    CircuitParts.counter++
  }

  setBigWirePointsInts(): void {
    if (this.isBig) {
      this.bigWirePointsInts = new Array(this.SizeX() * this.SizeY())
      for (let i = 0; i < this.SizeX(); i++) {
        for (let j = 0; j < this.SizeY(); j++) {
          const points = new Array<number>(32)
          const nx = Math.floor(i / 2)
          const ny = Math.floor(j / 2)
          const ix = i - nx * 2
          const iy = j - ny * 2
          const idt = ix + iy * 2
          const vsc = CircuitParts.vscS[idt]
          const hen = CircuitParts.henS[vsc]
          const off = CircuitParts.offS[vsc]
          for (let k = 0; k < 32; k++) {
            let nk = Math.floor(k / 2)
            const dir = Math.floor(k / 8)
            if (dir == hen[0]) {
              nk += off[0]
              points[k] = this.wirePointsInts[nx + ny * this.sizeX][nk]
            } else if (dir == hen[1]) {
              nk += off[1]
              points[k] = this.wirePointsInts[nx + ny * this.sizeX][nk]
            } else {
              points[k] = 0
            }
          }
          this.bigWirePointsInts[i + j * this.SizeX()] = points
        }
      }
    }
  }

  getWirePointsInt(x: number, y: number): number[] | undefined {
    return this.isBig
      ? this.bigWirePointsInts[x + y * this.SizeX()]
      : this.wirePointsInts[x + y * this.SizeX()]
  }

  getPosition(): [number, number] {
    return [this.x, this.y]
  }
  setPosition(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
