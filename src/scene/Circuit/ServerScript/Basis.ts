import { CircuitPartsInfo, CircuitWiresInfo } from "../BothScript/CircuitInfo"
import { Cell, WireExtendInfo } from "./Cell"
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
    private parts: CircuitParts[] = new Array(0)

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
        parts.SetPosition(x, y)
        this.partsCellDict[parts.id] = allCells
        this.parts.push(parts)
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
        //wire毎に処理
        wirePoints.forEach((v) => {
            let nx = x
            let ny = y
            const [dir, _] = this.IndexConvertToAroundIndex(v)
            const wireExtendInfo = new WireExtendInfo(dir)
            while (true) {
                let [ndir, wireInd] = this.IndexConvertToAroundIndex(v)
                nx += Basis.dx[ndir]
                ny += Basis.dy[ndir]
                const nCell = this.GetCell(nx, ny)
                if (nCell == undefined) {
                    break
                }
                wireExtendInfo.Update(wireInd, ndir)
                v = nCell.SetWire(wireExtendInfo)
                if (v == -1) {
                    break
                }
            }
        })
    }

    ConvertToCircuitInfos(): [CircuitPartsInfo[], CircuitWiresInfo[]] {
        const partsInfos: CircuitPartsInfo[] = new Array(0)
        const wiresInfos: CircuitWiresInfo[] = new Array(0)
        //wire追加
        this.cells.forEach(v => {
            const wires = new Array<[number, number]>(0)
            v.GetAllWires().forEach(w => {
                if (!w.IsEmpty()) {
                    wires.push([w.from, w.to])
                }
            })
            if (wires.length != 0) {
                wiresInfos.push(new CircuitWiresInfo(v.x, v.y, wires))
            }
        })
        //parts追加
        this.parts.forEach(v => {
            const [x, y] = v.GetPosition()
            partsInfos.push(new CircuitPartsInfo(x, y, v.isBig, v.problemCategory))
        })
        return [partsInfos, wiresInfos]
    }

    //ここから補助的

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
}