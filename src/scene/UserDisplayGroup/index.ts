import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { TweenLite, Back } from 'gsap'
import { UserDisplay } from './UserDisplay'

export class UserDisplayGroup extends VisualizerGroup {
  constructor() {
    super()

    new Array(50).fill(null).forEach((_, index) => {
      const user = new UserDisplay()
      const rot = (index / 50) * Math.PI * 2
      user.position.set(Math.sin(rot) * 5, 0, Math.cos(rot) * 5)
      user.rotation.y = rot + Math.PI
      this.add(user)
    })
  }
}
