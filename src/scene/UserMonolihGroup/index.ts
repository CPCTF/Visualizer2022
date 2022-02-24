import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { UserMonolith } from './UserMonolith'

export class UserMonolithGroup extends VisualizerGroup {
  constructor() {
    super()

    new Array(100).fill(null).forEach((_, index) => {
      const user = new UserMonolith()
      const rot = (index / 100) * Math.PI * 2
      console.log(rot)
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
  }
}
