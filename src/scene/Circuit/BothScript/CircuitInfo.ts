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

export class CircuitInfoUtils {
    static JsonToInfo(json: string): [CircuitPartsInfo[], CircuitWiresInfo[]] {
        const objs = JSON.parse(json) as ICircuit[]
        const partsInfos: CircuitPartsInfo[] = new Array(0)
        const wiresInfos: CircuitWiresInfo[] = new Array(0)
        objs.forEach(obj => {
            if (obj.class == 'parts') {
                const parts = obj as IPartsInfo
                partsInfos.push(new CircuitPartsInfo(parts.x, parts.z, parts.isBig, parts.category))
            } else if (obj.class == 'wires') {
                const wires = obj as IWiresInfo
                wiresInfos.push(new CircuitWiresInfo(wires.x, wires.z, wires.wires))
            }
        });
        return [partsInfos, wiresInfos]
    }

    static InfoToJson(circuitPartsInfos: CircuitPartsInfo[], circuitWiresInfos: CircuitWiresInfo[]): string {
        const objs = new Array<Object>(0)
        circuitPartsInfos.forEach(v => {
            const obj: IPartsInfo = {
                class: 'parts',
                x: v.x,
                z: v.z,
                isBig: v.isBig,
                category: v.category
            }
            objs.push(obj)
        })
        circuitWiresInfos.forEach(v => {
            const obj: IWiresInfo = {
                class: 'wires',
                x: v.x,
                z: v.z,
                wires: v.wires
            }
            objs.push(obj)
        })
        return JSON.stringify(objs)
    }

}

interface ICircuit {
    class: string
}

interface IPartsInfo extends ICircuit {
    x: number;
    z: number;
    isBig: boolean;
    category: number;
}

interface IWiresInfo extends ICircuit {
    x: number;
    z: number;
    wires: [number, number][];
}