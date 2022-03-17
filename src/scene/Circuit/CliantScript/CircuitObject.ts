import { VisualizerGroup } from "#/templates/VisualizerGroup";
import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from "three";
import { Basis } from "../ServerScript/Basis";

export class CircuitWireObject extends VisualizerGroup {
    static sx = [1, 0, -1, 0]
    static sy = [0, -1, 0, 1]

    constructor(wires: [number, number][]) {
        super()
        wires.forEach(v => {
            const geometry = this.CreateWireGeometry(v)
            this.add(new Mesh(geometry, new MeshBasicMaterial({ color: 0xaaaaaa })))
        })
    }

    public start() {
        // no impl
    }

    public update() {
        super.update()
    }

    CreateWireGeometry(fromto: [number, number]): BufferGeometry {
        const wireGeometry = new BufferGeometry()
        const [from, to] = fromto
        if (to == -1) {
            //TODO:holeを作る
            return wireGeometry
        }
        const [flpos, frpos] = this.WireIndexToPosition(from)
        const [tlpos, trpos] = this.WireIndexToPosition(to)
        const vertices = new Float32Array([
            flpos[0], 0, flpos[1],
            frpos[0], 0, frpos[1],
            tlpos[0], 0, tlpos[1],

            tlpos[0], 0, tlpos[1],
            trpos[0], 0, trpos[1],
            flpos[0], 0, flpos[1],
        ])
        wireGeometry.setAttribute('position', new BufferAttribute(vertices, 3))
        return wireGeometry
    }
    WireIndexToPosition(wireInd: number, size: number = 1, a: number = 0.5): [[number, number], [number, number]] {
        const ind = wireInd % 8
        const dir = (wireInd - ind) / 8
        const pad = size / 8
        const side = pad * ind - pad * 7 / 2
        const x = Basis.dx[dir] / 2 + CircuitWireObject.sx[dir] * side
        const y = Basis.dy[dir] / 2 + CircuitWireObject.sy[dir] * side
        const lpos: [number, number] = [x - CircuitWireObject.sx[dir] * a * pad / 2, y - CircuitWireObject.sy[dir] * a * pad / 2]
        const rpos: [number, number] = [x + CircuitWireObject.sx[dir] * a * pad / 2, y + CircuitWireObject.sy[dir] * a * pad / 2]
        return [lpos, rpos]
    }
}