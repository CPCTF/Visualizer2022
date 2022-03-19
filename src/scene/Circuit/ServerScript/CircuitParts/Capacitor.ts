import { CircuitParts, ProblemCategory } from "../CircuitParts"
export class Capacitor extends CircuitParts {
    public sizeX: number = 1
    public sizeY: number = 1
    public wirePointsInts: number[][] = new Array(this.sizeY * this.sizeX)
    public problemCategory: ProblemCategory = ProblemCategory.Crypto
    constructor(isBig: boolean) {
        super(isBig)
        //x=0,y=0のcellのwirePoints
        this.wirePointsInts[0 + 0 * this.sizeX] = [1, 0, 1, 0, 1, 0, 1, 0,
            1, 0, 1, 0, 1, 0, 1, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0]
    }
}