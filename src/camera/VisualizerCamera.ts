import { Time } from '#/system/Time'
import { EventManagerInstance } from '#/system/EventManager'
import type { IRenderable } from '#/templates/IRenderable'
import gsap from 'gsap'
import { PerspectiveCamera } from 'three'

export class VisualizerCamera extends PerspectiveCamera implements IRenderable {
  constructor() {
    super(60, 1, 1, 2000)

    EventManagerInstance.addEventListener('recalculate', () => {
      gsap.to(this.position, 2, { y: -8 })
      setTimeout(() => {
        gsap.to(this.position, 2, { y: 2 })
      }, 10000)
    })
  }

  public start(): void {
    this.position.set(
      Math.sin(Time.time * 0.1) * 4,
      2,
      Math.cos(Time.time * 0.1) * 4
    )
  }

  public update(): void {
    this.position.set(
      Math.sin(Time.time * 0.1) * 4,
      this.position.y,
      Math.cos(Time.time * 0.1) * 4
    )
    this.lookAt(0, this.position.y - 2, 0)
  }
}
