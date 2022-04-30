import { CircuitManager } from '#/circuit/CliantScript/CircuitManager'
import { EventEmitter } from '#/system/EventEmitter'
import { UserManager } from '#/system/UserManager'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { UserDisplay } from './UserDisplay'

export class UserDisplayGroup extends VisualizerGroup {
  private static users: UserDisplay[]
  private readonly initDisplayNum = 300
  private readonly basisSizePadding = 5
  private readonly displayBoundingBox = [3.0, 2.6, 2.5]
  private readonly defaultDisplayScale = 0.5
  private readonly rankToDisplayScale: Record<number, number> = {
    10: 1.0,
    30: 0.8,
    1e9: this.defaultDisplayScale
  }
  private readonly dirToDisplayScale = [1, 1, 1, 1]
  private readonly displayPosYLength = 30
  private readonly displayPosYMin = -5
  //四方の方向にランダムに配置
  private displayWH: Array<[number, number]> = new Array(4)
  private displayRandomIndex: Array<Array<[number, number]>> = new Array(4)
  private displayRandomIndexIndex = [0, 0, 0, 0]

  constructor() {
    super()
    UserDisplayGroup.users = []
  }

  public start() {
    for (let i = 0; i < 4; i++) {
      this.initDisplayExists(i)
    }
    for (
      let i = 0;
      i < Math.max(UserManager.ranking.length, this.initDisplayNum);
      i++
    ) {
      const user = this.addUserDisplay()
      const scale = this.getDisplayScale(i)
      user.scale.setScalar(scale)
      this.randomPutDisplay(user)
    }
    UserManager.ranking.forEach((id, index) => {
      UserDisplayGroup.users[index].updateUser(id)
    })

    EventEmitter.on('submit', ({ userId }) => {
      const user = UserDisplayGroup.users.filter(user => user.userid === userId)
      if (!user.length) return
      user[0].animation()
    })

    EventEmitter.on('recalculateend', () => {
      for (let i = 0; i < 4; i++) {
        this.initDisplayExists(i)
      }
      UserManager.ranking.forEach((id, index) => {
        if (index < UserDisplayGroup.users.length) {
          UserDisplayGroup.users[index].updateUser(id)
          this.randomPutDisplay(UserDisplayGroup.users[index])
        }
      })
      UserDisplayGroup.users.forEach(user => {
        if (user.userid == undefined) {
          this.randomPutDisplay(user)
        }
      })
    })
  }

  public static getUserDisplay(userId: string): UserDisplay | undefined {
    const user = UserDisplayGroup.users.filter(user => user.userid === userId)
    if (!user.length) return undefined
    return user[0]
  }

  private getDisplayScale(rank: number): number {
    for (const key in this.rankToDisplayScale) {
      if (rank < Number(key)) {
        return this.rankToDisplayScale[key]
      }
    }
    return this.defaultDisplayScale
  }

  private initDisplayExists(dir: number) {
    const wscale = this.displayBoundingBox[0] * this.dirToDisplayScale[dir]
    const hscale = this.displayBoundingBox[1] * this.dirToDisplayScale[dir]
    const width =
      dir % 2 == 0
        ? CircuitManager.getBasisSize()[0]
        : CircuitManager.getBasisSize()[1]
    const height = this.displayPosYLength
    const W = Math.floor(width / wscale)
    const H = Math.floor(height / hscale)
    this.displayWH[dir] = [W, H]

    const randomIndexes: Array<[number, number]> = new Array(W * H)
      .fill([0, 0])
      .map((_, index) => {
        return [index % W, Math.floor(index / W)] as [number, number]
      })
    randomIndexes.sort(() => {
      return Math.random() - 0.5
    })
    this.displayRandomIndex[dir] = randomIndexes
    this.displayRandomIndexIndex[dir] = 0
  }

  private getDisplayExistsRandomIndex(
    dir: number
  ): [number, number] | undefined {
    const index = this.displayRandomIndexIndex[dir]
    if (index >= this.displayRandomIndex[dir].length) {
      return undefined
    } else {
      this.displayRandomIndexIndex[dir]++
      return this.displayRandomIndex[dir][index]
    }
  }

  private randomPutDisplay(userDisplay: UserDisplay): void {
    const randomDirArray = [0, 1, 2, 3].sort(() => Math.random() - 0.5)
    for (const dir of randomDirArray) {
      const wh = this.getDisplayExistsRandomIndex(dir)
      if (wh === undefined) {
        continue
      } else {
        const W = this.displayWH[dir][0]
        const wscale = this.displayBoundingBox[0] * this.dirToDisplayScale[dir]
        const hscale = this.displayBoundingBox[1] * this.dirToDisplayScale[dir]
        const offsetW = (wscale * W) / 2

        const [w, h] = wh

        const x =
          dir % 2 == 0 ? wscale * w - offsetW : dir == 1 ? offsetW : -offsetW
        const y = hscale * h + this.displayPosYMin
        const z =
          dir % 2 == 1 ? wscale * w - offsetW : dir == 0 ? offsetW : -offsetW

        const paddingX = dir % 2 == 1 ? this.basisSizePadding * Math.sign(x) : 0
        const paddingZ = dir % 2 == 0 ? this.basisSizePadding * Math.sign(z) : 0
        userDisplay.position.set(x + paddingX, y, z + paddingZ)
        userDisplay.lookAt(dir % 2 == 0 ? x : 0, y, dir % 2 == 0 ? 0 : z)
        return
      }
    }
    console.error('display cant put')
  }

  private addUserDisplay(userid: string | undefined = undefined): UserDisplay {
    const user = new UserDisplay()
    if (userid != undefined) user.updateUser(userid)
    this.add(user)
    UserDisplayGroup.users.push(user)
    return user
  }
}
