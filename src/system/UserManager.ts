import { User } from './User'

export class UserManager {
  private users: Record<string, User> = {}

  public addUser(id: string, displayName: string, iconPath: string) {
    const user = new User(id)
    this.users[id] = user
    user.set(99999999, displayName, iconPath)
  }

  public updateUser(
    id: string,
    ranking: number,
    displayName: string,
    iconPath: string
  ): void {
    if (!this.users[id]) throw new Error('Id is invalid')
    this.users[id]?.set(ranking, displayName, iconPath)
  }

  public getUser(id: string): User | undefined {
    return this.users[id]
  }
}
