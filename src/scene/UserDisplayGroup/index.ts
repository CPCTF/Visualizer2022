import { EventEmitter } from '#/system/EventEmitter'
import { UserManager } from '#/system/UserManager'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { UserDisplay } from './UserDisplay'

export class UserDisplayGroup extends VisualizerGroup {
  private users: UserDisplay[]
  constructor() {
    super()
    this.position.y = 3

    this.users = []

    let displayNum = 20
    let displays = new Array(displayNum).fill(null).map((_, index) => {
      const user = new UserDisplay()
      const rot = (index / displayNum) * Math.PI * 2
      user.position.set(Math.sin(rot) * 4, 0, Math.cos(rot) * 4)
      user.scale.set(0.4, 0.4, 0.4)
      user.lookAt(0, -2, 0)
      this.add(user)
      return user
    })
    this.users = this.users.concat(displays)
    displayNum = 60
    displays = new Array(displayNum).fill(null).map((_, index) => {
      const user = new UserDisplay()
      const rot = (index / displayNum) * Math.PI * 2
      user.position.set(Math.sin(rot) * 4.5, -1, Math.cos(rot) * 4.5)
      user.scale.set(0.15, 0.15, 0.15)
      user.lookAt(0, -2, 0)
      this.add(user)
      return user
    })
    this.users = this.users.concat(displays)
    displayNum = 120
    displays = new Array(displayNum).fill(null).map((_, index) => {
      const user = new UserDisplay()
      const rot = (index / displayNum) * Math.PI * 2
      user.position.set(Math.sin(rot) * 5, -1.5, Math.cos(rot) * 5)
      user.scale.set(0.1, 0.1, 0.1)
      user.lookAt(0, -2, 0)
      this.add(user)
      return user
    })
    this.users = this.users.concat(displays)
  }

  public start() {
    UserManager.ranking.forEach((id, index) => {
      if (index >= this.users.length) return
      this.users[index].userid = id
    })
    EventEmitter.on('submit', ({ userid }) => {
      const user = this.users.filter(user => user.userid === userid)
      if (!user.length) return
      user[0].animation()
    })
  }
}
