import { Time } from '#/system/Time'
import { EventEmitter } from '#/system/EventEmitter'
import type { IRenderable } from '#/templates/IRenderable'
import gsap from 'gsap'
import { PerspectiveCamera } from 'three'

export class VisualizerCamera extends PerspectiveCamera implements IRenderable {
  constructor() {
    super(60, 1, 1, 2000)
    /*
    EventEmitter.on('recalculatestart', () => {
      gsap.to(this.position, 2, { y: -3 })
    })
    EventEmitter.on('recalculateend', () => {
      gsap.to(this.position, 2, { y: 1 })
    })*/
  }

  public start(): void {
    this.position.set(
      Math.sin(Time.time * 0.1) * 8,
      4,
      Math.cos(Time.time * 0.1) * 8
    )
  }

  public update(): void {
    this.position.set(
      Math.sin(Time.time * 0.1) * 8,
      this.position.y,
      Math.cos(Time.time * 0.1) * 8
    )
    this.lookAt(0, 0, 0)
  }
}
