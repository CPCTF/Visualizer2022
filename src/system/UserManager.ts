import type { UserRankingRaw, UserRaw } from './ResponseType'
import { User } from './User'

export class UserManager {
  private static users: Record<string, User> = {}
  private static _ranking: string[] = []
  public static get ranking() {
    return this._ranking
  }

  public static addUser({ id, name, iconUrl }: UserRaw) {
    const user = new User(id)
    this.users[id] = user
    user.set(-1, -1, name, iconUrl)
  }

  public static updateUser({
    id,
    name,
    iconUrl,
    point,
    rank
  }: UserRankingRaw): void {
    if (!this.users[id]) {
      this.addUser({ id, name, iconUrl })
    }
    this.users[id]?.set(point, rank, name, iconUrl)
  }

  public static updateRanking() {
    this._ranking = Object.keys(this.users)
    this._ranking = this._ranking.sort(
      (user1, user2) =>
        (this.users[user1]?.rank || 99999999) -
        (this.users[user2]?.rank || 999999999)
    )
  }

  public static getUser(id: string): User | undefined {
    return this.users[id]
  }
}
