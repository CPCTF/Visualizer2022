import { Time } from '#/system/Time'
import type { IRenderable } from '#/templates/IRenderable'
import { PerspectiveCamera } from 'three'

export class VisualizerCamera extends PerspectiveCamera implements IRenderable {
  constructor() {
    super(60, 1, 1, 2000)
  }

  public start(): void {
    // no impl
  }

  public update(): void {
    this.position.set(
      Math.sin(Time.time * 0.1) * 3,
      2,
      Math.cos(Time.time * 0.1) * 3
    )
    this.lookAt(0, 0, 0)
  }
}
