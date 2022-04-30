import type { CircuitParts } from './CircuitParts'

export class Cell {
  public x: number
  public y: number
  private parts: CircuitParts | undefined
  private wires: Wire[]
  private wirePoints: boolean[]

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    //4辺x8点の配線点を初期化
    this.wirePoints = new Array<boolean>(4 * 8).fill(false)

    this.wires = new Array<Wire>(4 * 8)
    new Array(4 * 8).fill(null).forEach((_, i) => {
      this.wires[i] = new Wire(i)
    })
  }

  //パーツかどうか
  isParts(): boolean {
    return this.parts != undefined
  }

  //パーツを配置
  setParts(x: number, y: number, parts: CircuitParts): void {
    this.parts = parts
    const wirePointsInt = parts.getWirePointsInt(x, y) as number[]
    this.wirePoints.forEach((_, i) => {
      this.wirePoints[i] = wirePointsInt[i] == 1
    })

    //どこにも引けないように(holeにはなる可能性あり)
    this.wires.forEach(v => {
      v.cantTo()
    })
  }

  //活性のある接続点の添え字を全て返す
  getActiveWirePointsIndex(): number[] {
    const inds = new Array<number>(0)
    this.wirePoints.forEach((v, i) => {
      if (v) inds.push(i)
    })
    return inds
  }

  //Wireを設置し、toを返す
  setWire(info: WireExtendInfo): number {
    if (this.isParts()) {
      //パーツなのでwire設置できない
      return -1
    }
    const wire = this.wires[info.wireInd]
    const nto = wire.setTo(info.notdir, info.priority, info.end)
    this.updateWires(wire)
    this.updateWirePoints(wire)
    return nto
  }

  getAllWires(): Wire[] {
    return this.wires
  }

  //ここから補助的

  //wiresの更新
  private updateWires(newWire: Wire): void {
    this.wires.forEach(v => {
      v.updateCanTo(newWire)
    })
  }

  //wirePointsの更新
  private updateWirePoints(newWire: Wire): void {
    if (newWire.isHole()) {
      //穴である場合
      this.wirePoints[newWire.ind] = true
    } else {
      this.wirePoints[newWire.from] = true
      this.wirePoints[newWire.to] = true
    }
  }

  //デバッグ用
  logWiresCanto() {
    console.log('(x:%d,y:%d)のセル', this.x, this.y)
    this.wires.forEach(v => {
      let logstr = 'Wire %d:\nCanTo:'
      v.canTo.forEach(v => (logstr += '\n' + v.toString()))
      console.log(logstr, v.ind)
    })
  }
}

export class WireExtendInfo {
  constructor(dir: number) {
    this.dir = dir
    this.beforeDir = dir
    this.notdir = (dir + 2) % 4
  }
  public notdir: number
  public wireInd = 0
  //left=0,straight=1,right=2
  public priority: [number, number, number] = [0, 1, 2]
  public end = false
  private dir: number
  private beforeDir: number
  private counter = 0
  private straightCounter = 0
  private readonly straightMin = 4
  private readonly straightMax = 10
  private readonly counterMax = 200

  update(wireInd: number, ndir: number): void {
    this.counter++
    this.wireInd = wireInd
    if (this.beforeDir == ndir) {
      this.straightCounter++
    } else {
      //曲がった
      this.straightCounter = 0
    }

    //伸びる限界
    if (this.counter > this.counterMax) {
      this.end = true
      return
    }

    //真っすぐの限界
    if (
      this.rand(this.straightCounter / this.straightMax) &&
      this.straightCounter > this.straightMin
    ) {
      //曲げる
      if (ndir == this.dir) {
        //straight
        if (this.rand(0.5)) {
          this.priority = [0, 2, 1]
        } else {
          this.priority = [2, 0, 1]
        }
      } else if (ndir == (this.dir + 1) % 4) {
        //right
        this.priority = [0, 1, 2]
      } else {
        //left
        this.priority = [2, 1, 0]
      }
    } else {
      //曲げない
      if (this.rand(0.5)) {
        this.priority = [1, 0, 2]
      } else {
        this.priority = [1, 2, 0]
      }
    }

    this.beforeDir = ndir
  }

  private rand(percent: number): boolean {
    return Math.random() <= percent
  }
}

export class Wire {
  public ind: number
  public from: number
  public to: number
  public canTo: number[]
  constructor(from: number) {
    this.ind = from
    this.from = from
    this.to = -1
    const mod = from % 8
    const shift = (from - mod) / 8
    this.canTo = [15 - mod, 23 - mod, 31 - mod]
    this.shift(shift)
  }

  isCanTo(): boolean {
    return this.canTo.length != 0
  }
  cantTo(): void {
    this.canTo = new Array(0)
  }
  eraseCanTo(to: number): void {
    this.canTo.forEach((v, i) => {
      if (v == to) {
        this.canTo[i] = -1
      }
    })
  }
  isFull(): boolean {
    return this.from == this.ind && this.to != -1
  }
  isHole(): boolean {
    return this.from == -1
  }
  isEmpty(): boolean {
    return this.from == this.ind && this.to == -1
  }

  setTo(
    notdir: number,
    curvePriority: [number, number, number],
    end: boolean
  ): number {
    let res = -1

    //どこへもいけない
    if (!this.isCanTo()) {
      if (this.isHole() || this.isFull()) {
        return -1
      } else if (this.isEmpty()) {
        this.from = -1
        return -1
      }
    }

    //穴にする
    if (end) {
      this.cantTo()
      this.from = -1
      return -1
    }

    //優先度に従ってその方向に伸ばせるか決定
    for (let i = 0; i < 3; i++) {
      const ind = curvePriority[i]
      if (this.canTo[ind] != -1 && ind != notdir) {
        res = this.canTo[ind]
        break
      }
    }

    this.cantTo()

    //穴にする
    if (res == -1) {
      this.from = -1
      return -1
    }

    this.to = res
    return res
  }

  //入れられてくるwireはFullか、Hole
  updateCanTo(newWire: Wire): void {
    if (!this.isCanTo()) return
    //新たなワイヤが穴である
    if (newWire.isHole()) {
      //穴の位置を行き先から消しておく
      this.eraseCanTo(newWire.ind)
      return
    }
    //自身の位置に伸びてきた場合or自身である場合
    if (this.ind == newWire.ind || this.ind == newWire.to) {
      this.cantTo()
      return
    }
    //新たなワイヤのfromとtoを行き先から消しておく
    this.eraseCanTo(newWire.from)
    this.eraseCanTo(newWire.to)

    //領域で塗分けて、fromと違う領域は到達できないので行先から消す
    const uCanTo = new Array<number>(3).fill(-1)
    let uFrom = 0
    let setId = 0
    for (let i = 0; i < 32; i++) {
      const loopind = (newWire.from + i) % 32
      if (loopind == newWire.to) {
        setId++
        continue
      }
      if (loopind == this.from) {
        uFrom = setId
        continue
      }
      const fInd = this.canTo.findIndex(v => v == loopind)
      if (fInd != -1) {
        uCanTo[fInd] = setId
      }
    }

    const nCanTo = new Array<number>(3).fill(-1)
    this.canTo.forEach((v, i) => {
      //fromと同じ領域
      if (uFrom == uCanTo[i]) {
        nCanTo[i] = v
      } else {
        nCanTo[i] = -1
      }
    })
    this.canTo = nCanTo
  }

  //cantoが全部正になるので注意
  shift(shift: number): void {
    this.canTo.forEach((v, i) => {
      this.canTo[i] = (((v + 8 * shift) % 32) + 32) % 32
    })
  }
}
