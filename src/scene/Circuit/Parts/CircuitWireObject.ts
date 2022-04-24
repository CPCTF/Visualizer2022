import { VisualizerGroup } from '#/templates/VisualizerGroup'
import {
  BufferAttribute,
  BufferGeometry,
  Mesh,
  MeshBasicMaterial,
  RingBufferGeometry
} from 'three'
import { Basis } from '../../../../server/Basis'

export class CircuitWireObject extends VisualizerGroup {
  static sx = [1, 0, -1, 0]
  static sy = [0, -1, 0, 1]

  constructor(wires: [number, number][]) {
    super()
    wires.forEach(v => {
      const geometry = this.createWireGeometry(v)
      this.add(new Mesh(geometry, new MeshBasicMaterial({ color: 0xffffff })))
    })
  }

  public start() {
    // no impl
  }

  public update() {
    super.update()
  }

  createWireGeometry(fromto: [number, number]): BufferGeometry {
    let wireGeometry = new BufferGeometry()
    const size = 1
    const a = 0.25
    const bout = 0.5
    const bin = 0.25
    const thetaSeg = 16
    const [from, to] = fromto
    if (to == -1) {
      //TODO:holeを作る
      const rout = (size * bout) / 8 / 2
      const rin = (size * bin) / 8 / 2
      const ringGeometry = new RingBufferGeometry(rin, rout, thetaSeg)
      ringGeometry.rotateX(-Math.PI / 2)
      let [offsetX, offsetZ] = this.wireIndexToPosition(from, size)
      const dir = (from - (from % 8)) / 8
      if (dir == 0 || dir == 2) {
        offsetZ -= Math.sign(offsetZ) * (rout - rin)
      } else {
        offsetX -= Math.sign(offsetX) * (rout - rin)
      }
      const length = ringGeometry.attributes.position.count
      for (let i = 0; i < length; i++) {
        const px = ringGeometry.attributes.position.getX(i)
        const pz = ringGeometry.attributes.position.getZ(i)
        ringGeometry.attributes.position.setXYZ(
          i,
          px + offsetX,
          0,
          pz + offsetZ
        )
      }
      wireGeometry = ringGeometry
    } else {
      const [flpos, frpos] = this.wireIndexToPositionPair(from, size, a)
      const [tlpos, trpos] = this.wireIndexToPositionPair(to, size, a)
      const vertices = new Float32Array([
        flpos[0],
        0,
        flpos[1],
        frpos[0],
        0,
        frpos[1],
        tlpos[0],
        0,
        tlpos[1],

        tlpos[0],
        0,
        tlpos[1],
        trpos[0],
        0,
        trpos[1],
        flpos[0],
        0,
        flpos[1]
      ])
      wireGeometry.setAttribute('position', new BufferAttribute(vertices, 3))
    }

    return wireGeometry
  }

  wireIndexToPosition(wireInd: number, size = 1): [number, number] {
    const ind = wireInd % 8
    const dir = (wireInd - ind) / 8
    const pad = size / 8
    const side = pad * ind - (pad * 7) / 2
    const x = Basis.dx[dir] / 2 + CircuitWireObject.sx[dir] * side
    const y = Basis.dy[dir] / 2 + CircuitWireObject.sy[dir] * side
    return [x, y]
  }

  wireIndexToPositionPair(
    wireInd: number,
    size = 1,
    a = 0.5
  ): [[number, number], [number, number]] {
    const ind = wireInd % 8
    const dir = (wireInd - ind) / 8
    const pad = size / 8
    const [x, y] = this.wireIndexToPosition(wireInd, size)
    const lpos: [number, number] = [
      x - (CircuitWireObject.sx[dir] * a * pad) / 2,
      y - (CircuitWireObject.sy[dir] * a * pad) / 2
    ]
    const rpos: [number, number] = [
      x + (CircuitWireObject.sx[dir] * a * pad) / 2,
      y + (CircuitWireObject.sy[dir] * a * pad) / 2
    ]
    return [lpos, rpos]
  }
}
