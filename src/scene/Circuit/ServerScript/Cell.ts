import type { CircuitParts } from "./CircuitParts"

export class Cell {
    public x: number
    public y: number
    private parts: CircuitParts | undefined
    private wires: Wire[] = new Array(4 * 8)
    private wirePoints: boolean[] = new Array(4 * 8)
    //基本的なワイヤの向き
    //private wireDir: number = -1
    //ワイヤがwireDirに従うかどうかの確率
    //private readonly wireFollowDirPer = 0.1

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        //4辺x8点の配線点を初期化
        this.wirePoints.forEach((_, i) => {
            this.wirePoints[i] = true
        })
        this.wires.forEach((_, i) => {
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
    SetWire(wireInd: number, dir: number, curvePriority: [number, number, number]): number {
        const wire = this.GetWire(wireInd)
        const to = wire.SetTo(dir, curvePriority)
        this.UpdateWires()
        this.UpdateWirePoints()
        return to
    }

    //ここから補助的

    //wireを得る
    private GetWire(ind: number): Wire {
        return this.wires[ind]
    }

    //wiresの更新
    private UpdateWires(): void {

    }

    //wirePointsの更新
    private UpdateWirePoints(): void {

    }

    //配線点を設定 つかってない
    /*
    SetWirePoints(wirePoints: number[] | boolean[], ind?: number | undefined): void {
        if (ind !== undefined) {
            for (let i = 8 * ind + 0; i < 8 * ind + 8; i++) {
                if (typeof wirePoints[i] == "boolean") {
                    this.wirePoints[i] = wirePoints[i] as boolean
                } else {
                    this.wirePoints[i] = (wirePoints[i] == 1)
                }
            }
        } else {
            this.wirePoints.forEach((_, i) => {
                if (typeof wirePoints[i] == "boolean") {
                    this.wirePoints[i] = wirePoints[i] as boolean
                } else {
                    this.wirePoints[i] = (wirePoints[i] == 1)
                }
            })
        }
    }*/

    /*
    GetWirePoints(ind?: number | undefined): boolean[] {
        if (ind !== undefined) {
            const res = new Array<boolean>(0)
            for (let i = 8 * ind + 0; i < 8 * ind + 8; i++) {
                res.push(this.wirePoints[i] as boolean)
            }
            return res
        } else {
            return this.wirePoints
        }
    }*/

    /*
    GetWire(ind?: number | undefined): Wire[] {
        if (ind !== undefined) {
            const res = new Array<Wire>(0)
            for (let i = 8 * ind + 0; i < 8 * ind + 8; i++) {
                res.push(this.wires[i] as Wire)
            }
            return res
        } else {
            return this.wires
        }
    }*/

    /*
    CompareWirePoints(acell: Cell, ind: number): boolean {
        const mywp = this.GetWirePoints(ind)
        const awp = acell.GetWirePoints((ind + 2) % 4)
        for (let i = 0; i < 8; i++) {
            if (mywp[i] !== awp[7 - i]) return false
        }
        return true
    }*/

    /*
    CheckWireCanTo(acell: Cell, ind: number): boolean {
        const myw = this.GetWires(ind)
        const awp = acell.GetWirePoints((ind + 2) % 4)
        awp.forEach((v, i) => {
            if (v)
        })
    }
    */

}

export class Wire {
    public from: number
    public to: number
    public canTo: number[] = new Array(0)
    constructor(from: number) {
        this.from = from
        this.to = -1
        const mod = from % 8
        const shift = (from - mod) / 8
        this.canTo.push(31 - mod, 23 - mod, 15 - mod)
        this.Shift(shift)
    }

    IsCanTo(): boolean { return this.canTo.length != 0 }
    CantTo(): void { this.canTo = new Array(0) }

    SetTo(dir: number, curvePriority: [number, number, number]): number {
        let res = -1
        //どこへもいけない
        if (!this.IsCanTo())
            return -1
        for (let i = 0; i < 3; i++) {
            const ind = curvePriority[i]
            if (this.canTo[ind] != -1 && ind != dir) {
                res = this.canTo[ind]
                break
            }
        }
        this.CantTo()
        return res
    }

    UpdateCanTo(newWire: Wire): void {
        //伸ばす場所がない
        if (this.IsCanTo())
            return
        //新たなワイヤのfromとtoを消しておく
        this.canTo = this.canTo.filter(v => !(v == newWire.from || v == newWire.to))

        //新たなワイヤが伸びていない
        if (newWire.to == -1)
            return

        if (this.canTo.length == 0)
            return
        if (this.from == newWire.from || this.from == newWire.to)
            return


        const uCanTo = new Array<number>(3)
        let uFrom = 0
        let setId = 0
        for (let i = newWire.from; i != (newWire.from - 1 + 32) % 32; i = (i + 1) % 32) {
            if (i == newWire.to)
                setId++
            if (i == this.from)
                uFrom = setId
            const fInd = this.canTo.findIndex(v => v == i)
            if (fInd != -1)
                uCanTo[fInd] = setId
        }
        const nCanTo = new Array<number>(3)
        this.canTo.forEach((v, i) => {
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