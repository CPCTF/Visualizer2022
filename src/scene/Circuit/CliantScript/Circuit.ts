import { ThreeResourceLoader } from "#/system/Loader";
import { VisualizerGroup } from "#/templates/VisualizerGroup";
import type { Object3D } from "three/src/core/Object3D";
import { ProblemCategory } from "../ServerScript/CircuitParts";
import { CircuitInfoUtils, CircuitPartsInfo, CircuitWiresInfo } from "../BothScript/CircuitInfo";
import { CircuitWireObject } from "./CircuitObject";
import { ServerTester } from "../ServerScript/ServerTester";

export class Circuit extends VisualizerGroup {
    constructor() {
        super()
        const [partsInfos, wiresInfos] = this.TestData()
        this.ImportCircuitInfo(partsInfos, wiresInfos)
    }

    public start(): void {
        super.start()
    }

    public update(): void {
        super.update()
    }

    //サーバーから送られてきたCircuitInfoを元に設置
    ImportCircuitInfo(circuitPartsInfos: CircuitPartsInfo[], circuitWiresInfos: CircuitWiresInfo[]): void {
        circuitPartsInfos.forEach(v => {
            let objpath = ProblemCategory[v.category]
            if (v.isBig) {
                objpath += "Big"
            }
            const obj = ThreeResourceLoader.get(objpath) as Object3D
            obj.position.set(v.x, 0, v.z)
            this.add(obj)
        })
        circuitWiresInfos.forEach(v => {
            const wire = new CircuitWireObject(v.wires)
            wire.position.set(v.x, 0, v.z)
            this.add(wire)
        })
    }

    TestData(): [CircuitPartsInfo[], CircuitWiresInfo[]] {
        const serverTester = new ServerTester()
        const json = serverTester.GetJson()
        return CircuitInfoUtils.JsonToInfo(json)
    }
}
