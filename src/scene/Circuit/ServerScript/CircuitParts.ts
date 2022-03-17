export abstract class CircuitParts {
    abstract sizeX: number
    abstract sizeY: number
    abstract wirePointsInts: number[][]
    abstract problemCategory: ProblemCategory
    public id: number
    static counter: number = 0
    public isBig: boolean
    private x: number = 0
    private y: number = 0
    constructor(isBig: boolean) {
        this.isBig = isBig
        this.id = CircuitParts.counter
        CircuitParts.counter++
    }

    GetWirePointsInt(x: number, y: number): number[] | undefined {
        return this.wirePointsInts[x + y * this.sizeX];
    }

    GetPosition(): [number, number] { return [this.x, this.y] }
    SetPosition(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

export enum ProblemCategory {
    Reversing,
    Pwn,
    PPC,
    Crypto,
    Shell,
    Forensics,
    Web,
    OSINT,
    Misc
}