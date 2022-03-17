import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { UserDisplay } from './UserDisplay'

export class UserDisplayGroup extends VisualizerGroup {
  constructor() {
    super()

    let displayNum = 20
    new Array(displayNum).fill(null).forEach((_, index) => {
      const user = new UserDisplay()
      const rot = (index / displayNum) * Math.PI * 2
      user.position.set(Math.sin(rot) * 4, 0, Math.cos(rot) * 4)
      user.rotation.y = rot + Math.PI
      user.scale.set(0.4, 0.4, 0.4)
      this.add(user)
    })
    displayNum = 60
    new Array(displayNum).fill(null).forEach((_, index) => {
      const user = new UserDisplay()
      const rot = (index / displayNum) * Math.PI * 2
      user.position.set(Math.sin(rot) * 4.5, 1, Math.cos(rot) * 4.5)
      user.rotation.y = rot + Math.PI
      user.scale.set(0.15, 0.15, 0.15)
      this.add(user)
    })
    displayNum = 120
    new Array(displayNum).fill(null).forEach((_, index) => {
      const user = new UserDisplay()
      const rot = (index / displayNum) * Math.PI * 2
      user.position.set(Math.sin(rot) * 5, 1.5, Math.cos(rot) * 5)
      user.rotation.y = rot + Math.PI
      user.scale.set(0.1, 0.1, 0.1)
      this.add(user)
    })
  }
}
