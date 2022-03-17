import type { CircuitParts } from "./CircuitParts"

export class Cell {
    public x: number
    public y: number
    private parts: CircuitParts | undefined
    private wires: Wire[] = new Array(4 * 8)
    private wirePoints: boolean[] = new Array(4 * 8)

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

    //TODO:Wireを設置する
    SetWire(wireInd: number) {

    }

    //配線点を設定 つかってない
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
    }

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
    }

    GetWires(ind?: number | undefined): Wire[] {
        if (ind !== undefined) {
            const res = new Array<Wire>(0)
            for (let i = 8 * ind + 0; i < 8 * ind + 8; i++) {
                res.push(this.wires[i] as Wire)
            }
            return res
        } else {
            return this.wires
        }
    }


    CompareWirePoints(acell: Cell, ind: number): boolean {
        const mywp = this.GetWirePoints(ind)
        const awp = acell.GetWirePoints((ind + 2) % 4)
        for (let i = 0; i < 8; i++) {
            if (mywp[i] !== awp[7 - i]) return false
        }
        return true
    }

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
    public to: number | undefined
    public canTo: number[] = new Array(0)
    constructor(from: number) {
        this.from = from
        const mod = from % 8
        const shift = (from - mod) / 8
        this.canTo.push(31 - mod, 23 - mod, 15 - mod)
        this.Shift(shift)
    }
    SetTo(to: number) {
        this.to = to
        this.canTo = new Array(0)
    }
    IsCanTo(): boolean { return this.canTo.length != 0 }
    UpdateCanTo(newWire: Wire): void {
        if (this.to != undefined)
            return
        if (newWire.to == undefined)
            return
        if (this.from == newWire.from || this.from == newWire.to)
            return
        this.canTo = this.canTo.filter(v => !(v == newWire.from || v == newWire.to))
        if (this.canTo.length == 0)
            return

        const uCanTo = new Array<number>(this.canTo.length)
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
        const nCanTo = new Array<number>(0)
        this.canTo.forEach((v, i) => {
            if (uFrom == uCanTo[i])
                nCanTo.push(v)
        })
        this.canTo = nCanTo
    }
    Shift(shift: number): void {
        this.canTo.forEach((v, i) => {
            this.canTo[i] = ((v + 8 * shift) % 32 + 32) % 32
        })
    }
}