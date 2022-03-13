import type { UserRankingRaw, UserRaw } from './ResponseType'
import { User } from './User'

export class UserManager {
  private static users: Record<string, User> = {}

  public static addUser({ id, name, iconUrl }: UserRaw) {
    const user = new User(id)
    this.users[id] = user
    user.set(99999999, -1, name, iconUrl)
  }

  public static updateUser({
    id,
    name,
    iconUrl,
    point,
    rank
  }: UserRankingRaw): void {
    if (!this.users[id]) throw new Error('Id is invalid')
    this.users[id]?.set(point, rank, name, iconUrl)
  }

  public static getUser(id: string): User | undefined {
    return this.users[id]
  }
}
