import { Group } from 'three'
import type { IRenderable } from './IRenderable'
import { VisualizerObject } from './VisualizerObject'

export abstract class VisualizerGroup extends Group implements IRenderable {
  private initialized = false
  constructor() {
    super()
  }
  public abstract start(): void

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
