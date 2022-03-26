import { BufferGeometry, Material, Mesh } from 'three'
import type { IRenderable } from './IRenderable'
import { VisualizerGroup } from './VisualizerGroup'

export abstract class VisualizerObject extends Mesh implements IRenderable {
  private initialized = false

  constructor(geom: BufferGeometry, mat: Material | Material[]) {
    super(geom, mat)
    this.name = this.constructor.name
  }

  public start(): void {
    // no impl
  }

  public update() {
    if (!this.visible) return
    if (!this.initialized) {
      this.start()
      this.initialized = true
    }
    this.children.map(value => {
      if (
        value instanceof VisualizerGroup ||
        value instanceof VisualizerObject
      ) {
        value.update()
      }
    })
  }
}
