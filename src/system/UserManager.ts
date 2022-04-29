import type { UserRankingRaw, UserRaw, UserScoreRaw } from './ResponseType'
import { User } from './User'

export class UserManager {
  private static users: Map<string, User> = new Map()
  private static _ranking: User[] = []
  public static get ranking() {
    return this._ranking
  }

  public static addUser({ id, userName: name, iconUrl }: UserRaw) {
    const user = new User(id)
    this.users.set(id, user)
    user.updateInfo(name, iconUrl)
  }

  public static updateUser({ id, userName, iconUrl }: UserRaw): void {
    if (!this.users.has(id)) return
    this.users.get(id)?.updateInfo(userName, iconUrl)
  }

  public static updateRanking(ranking: UserRankingRaw[]) {
    this._ranking = ranking.map(({ id, score }) => {
      const user = this.getUser(id)
      if (!user) throw Error(`This user does not exist : ${id}`)
      user.updateScore(score)
      return user
    })
  }

  public static updateUserScore({ id, score }: UserScoreRaw) {
    this.users.get(id)?.updateScore(score)
  }

  public static getUser(id: string): User | undefined {
    return this.users.get(id)
  }

  public static size() {
    return this.users.size
  }
}
