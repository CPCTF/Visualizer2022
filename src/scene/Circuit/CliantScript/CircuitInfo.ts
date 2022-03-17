export class CircuitPartsInfo {
    constructor(
        public x: number,
        public z: number,
        public isBig: boolean,
        public category: number) { }
}

export class CircuitWiresInfo {
    constructor(
        public x: number,
        public z: number,
        public wires: [number, number][]) { }
}