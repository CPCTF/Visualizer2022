import type { UserRankingRaw, UserRaw, UserScoreRaw } from './ResponseType'
import { User } from './User'

export class UserManager {
  private static users: Record<string, User> = {}
  private static _ranking: User[] = []
  public static get ranking() {
    return this._ranking
  }

  public static addUser({ id, userName: name, iconUrl }: UserRaw) {
    const user = new User(id)
    this.users[id] = user
    user.updateInfo(name, iconUrl)
  }

  public static updateUser({ id, userName, iconUrl }: UserRaw): void {
    if (!this.users[id]) return
    this.users[id]?.updateInfo(userName, iconUrl)
  }

  public static updateRanking(ranking: UserRankingRaw[]) {
    this._ranking = ranking.map(({ id }) => {
      const user = this.getUser(id)
      if (!user) throw Error(`This user does not exist : ${id}`)
      return user
    })
  }

  public static updateUserScore({ id, score }: UserScoreRaw) {
    this.users[id]?.updateScore(score)
  }

  public static getUser(id: string): User | undefined {
    return this.users[id]
  }
}
