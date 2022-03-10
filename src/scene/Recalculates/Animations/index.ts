import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { Vector3 } from 'three'
import { Tile } from './Tile'

const getRandomPos = (): [number, number] => {
  const pos1 = Math.floor(Math.random() * 9)
  const _pos2 = Math.floor(Math.random() * 8)
  const pos2 = _pos2 < pos1 ? _pos2 : _pos2 + 1
  return [pos1, pos2]
}

export class RecalculateAnimations extends VisualizerGroup {
  public children: Tile[] = []
  constructor() {
    super()
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const mesh = new Tile()
        mesh.position.set(dx, 0, dy)
        this.add(mesh)
      }
    }
  }

  public animate() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const [p1, p2] = getRandomPos()
        const temp = this.children[p1] as Tile
        this.children[p1] = this.children[p2] as Tile
        this.children[p2] = temp
        ;(this.children[p1] as Tile).to(
          new Vector3((p1 % 3) - 1, 0, Math.floor(p1 / 3) - 1)
        )
        ;(this.children[p2] as Tile).to(
          new Vector3((p2 % 3) - 1, 0, Math.floor(p2 / 3) - 1)
        )
      }, 1000 * i)
    }
  }

  // public stop() {}
}
