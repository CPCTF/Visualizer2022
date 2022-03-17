import { Cell, Wire } from "./Cell"
import type { CircuitParts } from "./CircuitParts"

export class Basis {
    static dy = [1, 0, -1, 0]
    static dx = [0, 1, 0, -1]
    public sizeX: number
    public sizeY: number
    //基盤(セルの集合)
    private cells: Cell[]
    //partsのid->cell[]の辞書
    private partsCellDict: { [id: number]: Cell[] } = {};

    constructor(sizeX: number, sizeY: number) {
        this.sizeX = sizeX
        this.sizeY = sizeY
        this.cells = new Array(this.sizeY * this.sizeX)
        for (let i = 0; i < sizeY; i++) {
            for (let j = 0; j < sizeX; j++) {
                this.cells[i * sizeX + j] = new Cell(j, i)
            }
        }
    }

    //パーツを置く
    PutParts(x: number, y: number, parts: CircuitParts): boolean {
        if (!this.CanPutParts(x, y, parts))
            return false
        const sy = parts.sizeY;
        const sx = parts.sizeX;
        const allCells = new Array<Cell>(0)
        for (let i = 0; i < sy; i++) {
            for (let j = 0; j < sx; j++) {
                const ny = y + i;
                const nx = x + j;
                const cell = this.GetCell(nx, ny) as Cell
                cell.SetParts(j, i, parts)
                allCells.push(cell)
            }
        }
        this.partsCellDict[parts.id] = allCells
        return true
    }

    //パーツが占める全てのセルを得る
    GetPartsCells(parts: CircuitParts): Cell[] {
        if (parts.id in this.partsCellDict) {
            return this.partsCellDict[parts.id] as Cell[]
        } else {
            return new Array<Cell>(0)
        }
    }

    //指定したセルからwireを伸ばす
    ExtendWires(cell: Cell) {
        const x = cell.x
        const y = cell.y
        const wirePoints = cell.GetActiveWirePointsIndex()
        wirePoints.forEach((v, i) => {
            let nx = x
            let ny = y
            const [dir, _] = this.IndexConvertToAroundIndex(v)
            while (true) {
                let [ndir, wireInd] = this.IndexConvertToAroundIndex(v)
                nx += Basis.dx[ndir]
                ny += Basis.dy[ndir]
                const nCell = this.GetCell(nx, ny)
                if (nCell == undefined)
                    break

                v = nCell.SetWire(wireInd, dir)
                if (v == -1)
                    break
            }
        })
    }

    //ここから補助的
    private CreatePrioroty(dir: number, ndir: number): [number, number, number] {

    }

    //座標にパーツがおけるかを確認する
    private CanPutParts(x: number, y: number, parts: CircuitParts): boolean {
        const sy = parts.sizeY;
        const sx = parts.sizeX;
        for (let i = 0; i < sy; i++) {
            for (let j = 0; j < sx; j++) {
                const ny = y + i;
                const nx = x + j;
                const cell = this.GetCell(nx, ny)
                if (cell == undefined) {
                    //そんなセルはない
                    return false;
                } else {
                    //パーツの一部
                    if (!cell.IsParts())
                        return false;
                }
            }
        }
        return true;
    }

    //座標のセルを得る
    private GetCell(x: number, y: number): Cell | undefined {
        if (0 <= y && y < this.sizeY) {
            if (0 <= x && x < this.sizeX) {
                return this.cells[y * this.sizeX + x]
            }
        }
        return undefined
    }

    //隣接するセルに向けた形式へ変換する
    //dir,wireInd
    private IndexConvertToAroundIndex(ind: number): [number, number] {
        const mod = ind % 8
        const dir = (ind - mod) / 8
        const adir = (dir + 2) % 4
        const aind = (adir + 1) * 8 - ind - 1
        return [dir, aind]
    }

    //つかってない
    /*
    private CheckCellAround(x: number, y: number, cell: Cell): boolean {
        for (let i = 0; i < 4; i++) {
            const nx = x + Basis.dx[i]
            const ny = y + Basis.dy[i]
            const acell = this.GetCell(nx, ny)
            if (acell?.IsParts()) {
                if (!cell.CompareWirePoints(acell as Cell, i)) {
                    return false
                }
            } else {

            }
        }
        return true
    }*/

}
