import { UserManager } from '#/system/UserManager'

export interface UserCreatedData {
  userId: string
  name: string
  iconUrl: string
}

export const userCreated = ({ userId, name, iconUrl }: UserCreatedData) => {
  UserManager.addUser({ id: userId, userName: name, iconUrl })
}
