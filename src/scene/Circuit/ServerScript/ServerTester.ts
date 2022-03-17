import { CircuitInfoUtils } from '../BothScript/CircuitInfo'
import { Basis } from './Basis'
import { Capacitor } from './CircuitParts/Capacitor'


export class ServerTester {
    private sizeX = 50
    private sizeY = 50
    private basis: Basis
    constructor() {
        this.basis = new Basis(this.sizeX, this.sizeY)
    }

    //基盤部品の配置
    GetJson(): string {
        const capacitor = new Capacitor(false)
        //trueが帰らないとおかしい
        this.basis.PutParts(0, 0, capacitor)
        const partsCells = this.basis.GetPartsCells(capacitor)
        partsCells.forEach(v => this.basis.ExtendWires(v))
        const [partsInfos, wiresInfos] = this.basis.ConvertToCircuitInfos()
        return CircuitInfoUtils.InfoToJson(partsInfos, wiresInfos)
    }
}
