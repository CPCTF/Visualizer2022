export abstract class CircuitParts {
    abstract sizeX: number
    abstract sizeY: number
    abstract wirePointsInts: number[][]
    abstract problemCategory: ProblemCategory
    public id: number
    static counter: number = 0
    constructor() {
        this.id = CircuitParts.counter
        CircuitParts.counter++
    }

    GetWirePointsInt(x: number, y: number): number[] | undefined {
        return this.wirePointsInts[x + y * this.sizeX];
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