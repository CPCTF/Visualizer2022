import { Basis } from './Basis'
import { Capacitor } from './Capacitor'


export class index {
    private sizeX = 50
    private sizeY = 50
    private basis: Basis
    constructor() {
        this.basis = new Basis(this.sizeX, this.sizeY)
    }

    //クライアントとサーバー側を分離
    //基盤部品の配置
    PutCircuitParts() {
        const capacitor = new Capacitor()
        //trueが帰らないとおかしい
        this.basis.PutParts(0, 0, capacitor)
        const partsCells = this.basis.GetPartsCells(capacitor)
        partsCells.forEach(v => this.basis.ExtendWires(v))
    }
}
