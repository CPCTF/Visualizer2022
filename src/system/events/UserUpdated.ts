import { UserManager } from '#/system/UserManager'

export interface UserUpdatedData {
  userId: string
  name: string
  iconUrl: string
}

export const userUpdated = ({ userId, name, iconUrl }: UserUpdatedData) => {
  const user = UserManager.getUser(userId)
  if (!user) return
  UserManager.updateUser({
    point: user.point ?? 0,
    rank: user.rank ?? 0,
    id: userId,
    name,
    iconUrl
  })
}
