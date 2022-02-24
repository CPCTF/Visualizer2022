import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { TweenLite, Back } from 'gsap'
import { UserMonolith } from './UserMonolith'

export class UserMonolithGroup extends VisualizerGroup {
  constructor() {
    super()

    new Array(100).fill(null).forEach((_, index) => {
      const user = new UserMonolith()
      const rot = (index / 100) * Math.PI * 2
      user.position.set(Math.sin(rot) * 5, 0, Math.cos(rot) * 5)
      user.rotation.y = rot
      this.add(user)
    })
  }

  public start() {
    // no impl
  }

  public update() {
    super.update()
    // no impl
    if (Math.random() < 0.01) {
      const user = this.children[Math.floor(Math.random() * 100)]
      if (!user) return
      new TweenLite(user.scale, 0.5, {
        x: 3,
        y: 3,
        z: 3,
        ease: Back.easeOut
      })
      new TweenLite(user.position, 0.5, {
        x: user.position.x,
        y: 1,
        z: user.position.z,
        ease: Back.easeOut
      })
      new TweenLite(user.rotation, 0.5, {
        x: 0,
        y: user.rotation.y + Math.PI * 1,
        z: 0,
        ease: Back.easeOut
      })
    }
  }
}
