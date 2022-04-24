import { EventEmitter } from '#/system/EventEmitter'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { EmergencyAnimation } from './Emergency'
import { WaterAnimation } from './Water'
import gsap from 'gsap'

export class Recalculate extends VisualizerGroup {
  private startY = -2
  private endY = 2
  private emergencyAnimation: EmergencyAnimation
  private waterAnimation: WaterAnimation

  constructor() {
    super()
    this.emergencyAnimation = new EmergencyAnimation()
    this.waterAnimation = new WaterAnimation()
    this.add(this.emergencyAnimation)
    this.add(this.waterAnimation)
  }

  public start() {
    super.start()
    this.visible = false
    this.emergencyAnimation.position.y = 0.5
    this.position.y = this.startY
    EventEmitter.on('recalculatestart', () => {
      this.visible = true
      gsap.to(this.position, 1, { y: this.endY })
    })
    EventEmitter.on('recalculateend', () => {
      gsap
        .to(this.position, 1, { y: this.startY })
        .eventCallback('onComplete', () => {
          this.visible = false
        })
    })
  }

  public update() {
    super.update()
  }
}
