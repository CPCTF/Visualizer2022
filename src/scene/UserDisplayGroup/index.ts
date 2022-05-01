import { EventEmitter } from '#/system/EventEmitter'
import { UserManager } from '#/system/UserManager'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { UserDisplay } from './UserDisplay'
import gsap from 'gsap'

export class UserDisplayGroup extends VisualizerGroup {
  private static users: UserDisplay[]
  private readonly radius = 10
  private readonly radian = Math.PI
  private readonly dir = 3
  private readonly dirToNumWH: Array<[number, number]> = [
    [4, 3],
    [8, 5],
    [16, 8]
  ]
  private readonly displaySizeWH = [2.8, 2.5]

  private readonly startY = 0
  private readonly endY = 3
  private readonly animationDuration = 3
  constructor() {
    super()
    UserDisplayGroup.users = []
  }

  public start() {
    this.createDisplayObjects()
    UserManager.ranking.forEach((id, index) => {
      if (index >= UserDisplayGroup.users.length) return
      UserDisplayGroup.users[index].updateUser(id)
    })

    EventEmitter.on('recalculatestart', () => {
      gsap.to(this.position, this.animationDuration, { y: this.endY })
    })
    EventEmitter.on('recalculateend', () => {
      gsap.to(this.position, this.animationDuration, { y: this.startY })
    })

    EventEmitter.on('submit', ({ userId }) => {
      const user = UserDisplayGroup.users.filter(user => user.userid === userId)
      if (!user.length) return
      user[0].animation()
    })

    EventEmitter.on('recalculateend', () => {
      UserManager.ranking.forEach((id, index) => {
        if (index >= UserDisplayGroup.users.length) return
        UserDisplayGroup.users[index].updateUser(id)
      })
    })
  }

  private createDisplayObjects(): void {
    for (let dir = 0; dir < this.dir; dir++) {
      const [displayRawW, displayRawH] = this.displaySizeWH
      const [numW, numH] = this.dirToNumWH[dir]
      const thetaUnit = this.radian / this.dir / numW
      const displaysLengthW = Math.sqrt(
        2 * this.radius * this.radius * (1 - Math.cos(thetaUnit))
      )
      const displayScale = displaysLengthW / displayRawW
      const displayH = displayRawH * displayScale
      new Array(numW * numH)
        .fill(0)
        .map((_, i) => i)
        .sort(() => Math.random() - 0.5)
        .forEach(v => {
          const w = v % numW
          const h = Math.floor(v / numW)
          const nw = w - numW / 2
          const sign = nw < 0 ? -1 : 1
          let posTheta = thetaUnit * w + thetaUnit / 2
          posTheta += this.radian / 2 - this.radian / this.dir / 2
          const theta = posTheta + (sign * dir * this.radian) / this.dir / 2

          const [x, z] = [
            Math.cos(theta) * this.radius,
            Math.sin(theta) * this.radius
          ]
          const y = displayH * h

          const user = new UserDisplay()
          user.position.set(x, y, z)
          user.scale.setScalar(displayScale)
          user.lookAt(0, y, 0)
          this.add(user)
          UserDisplayGroup.users.push(user)
        })
    }
  }

  public static getUserDisplay(userId: string): UserDisplay | undefined {
    const user = UserDisplayGroup.users.filter(user => user.userid === userId)
    if (!user.length) return undefined
    return user[0]
  }
}
