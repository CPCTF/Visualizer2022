import type { InitialRaw, UserRankingRaw } from '#/system/ResponseType'
import { ServerRequest } from '#/system/ServerRequest'
import { globalSettings } from '#/system/SettingStore'
import { UserManager } from '#/system/UserManager'

export const getInitialData = async () => {
  const data = (await ServerRequest.initial()) as InitialRaw

  data.users.forEach(value => {
    UserManager.addUser(value)
  })

  // TODO: Recalculate

  globalSettings.startTime = new Date(data.startTime)
  globalSettings.endTime = new Date(data.endTime)
}
