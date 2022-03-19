import type { CircuitParts } from "./CircuitParts"

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
    IsParts(): boolean { return this.parts != undefined }

    //パーツを配置
    SetParts(x: number, y: number, parts: CircuitParts): void {
        this.parts = parts
        const wirePointsInt = parts.GetWirePointsInt(x, y) as number[];

        this.wirePoints.forEach((_, i) => {
            this.wirePoints[i] = (wirePointsInt[i] == 1)
        })

        //どこにも引けないように(holeにはなる可能性あり)
        this.wires.forEach(v => { v.CantTo() })
    }

    //活性のある接続点の添え字を全て返す
    GetActiveWirePointsIndex(): number[] {
        const inds = new Array<number>(0);
        this.wirePoints.forEach((v, i) => {
            if (v) inds.push(i)
        })
        return inds
    }

    //Wireを設置し、toを返す
    SetWire(info: WireExtendInfo): number {
        if (this.IsParts()) {
            //パーツなのでwire設置できない
            return -1
        }
        const wire = this.wires[info.wireInd]
        const nto = wire.SetTo(info.notdir, info.priority, info.end)
        this.UpdateWires(wire)
        this.UpdateWirePoints(wire)
        return nto
    }

    GetAllWires(): Wire[] {
        return this.wires
    }

    //ここから補助的

    //wiresの更新
    private UpdateWires(newWire: Wire): void {
        this.wires.forEach(v => { v.UpdateCanTo(newWire) })
    }

    //wirePointsの更新
    private UpdateWirePoints(newWire: Wire): void {
        if (newWire.IsHole()) {
            //穴である場合
            this.wirePoints[newWire.ind] = true
        } else {
            this.wirePoints[newWire.from] = true
            this.wirePoints[newWire.to] = true
        }
    }

    //デバッグ用
    LogWiresCanto() {
        console.log('(x:%d,y:%d)のセル', this.x, this.y)
        this.wires.forEach(v => {
            let logstr = 'Wire %d:\nCanTo:'
            v.canTo.forEach(v => logstr += '\n' + v.toString())
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
    public wireInd: number = 0
    //left=0,straight=1,right=2
    public priority: [number, number, number] = [0, 1, 2]
    public end: boolean = false
    private dir: number
    private beforeDir: number
    private counter: number = 0
    private straightCounter: number = 0
    private readonly straightMax = 4
    private readonly counterMax = 10

    Update(wireInd: number, ndir: number): void {
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
        if (this.Rand(this.straightCounter / this.straightMax)) {
            //曲げる
            if (ndir == this.dir) {
                //straight
                if (this.Rand(0.5)) {
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
            if (this.Rand(0.5)) {
                this.priority = [1, 0, 2]
            } else {
                this.priority = [1, 2, 0]
            }
        }

        this.beforeDir = ndir
    }

    private Rand(percent: number): boolean {
        return (Math.random() <= percent)
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
        this.Shift(shift)
    }

    IsCanTo(): boolean { return this.canTo.length != 0 }
    CantTo(): void { this.canTo = new Array(0) }
    EraseCanTo(to: number): void { this.canTo.forEach((v, i) => { if (v == to) { this.canTo[i] = -1 } }) }
    IsFull(): boolean { return (this.from == this.ind && this.to != -1) }
    IsHole(): boolean { return this.from == -1 }
    IsEmpty(): boolean { return (this.from == this.ind && this.to == -1) }

    SetTo(notdir: number, curvePriority: [number, number, number], end: boolean): number {
        let res = -1

        //どこへもいけない
        if (!this.IsCanTo()) {
            if (this.IsHole() || this.IsFull()) {
                return -1
            } else if (this.IsEmpty()) {
                this.from = -1
                return -1
            }
        }

        //穴にする
        if (end) {
            this.CantTo()
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

        this.CantTo()

        //穴にする
        if (res == -1) {
            this.from = -1
            return -1
        }

        this.to = res
        //console.log('Wire %d:\nFrom: %d\nTo: %d', this.ind, this.from, this.to);
        return res
    }

    //入れられてくるwireはFullか、Hole
    UpdateCanTo(newWire: Wire): void {
        if (!this.IsCanTo())
            return
        //新たなワイヤが穴である
        if (newWire.IsHole()) {
            //穴の位置を行き先から消しておく
            this.EraseCanTo(newWire.ind)
            return
        }
        //自身の位置に伸びてきた場合or自身である場合
        if (this.ind == newWire.ind || this.ind == newWire.to) {
            this.CantTo()
            return
        }
        //新たなワイヤのfromとtoを行き先から消しておく
        this.EraseCanTo(newWire.from)
        this.EraseCanTo(newWire.to)

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
    Shift(shift: number): void {
        this.canTo.forEach((v, i) => {
            this.canTo[i] = ((v + 8 * shift) % 32 + 32) % 32
        })
    }
}