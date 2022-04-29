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
    id: userId,
    userName: name,
    iconUrl
  })
}
