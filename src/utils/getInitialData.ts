import type { InitialRaw, UserRankingRaw } from '#/system/ResponseType'
import { ServerRequest } from '#/system/ServerRequest'
import { globalSettings } from '#/system/GlobalSettings'
import { UserManager } from '#/system/UserManager'
import { generateInitialData, wait } from './generateDummyData'

// setup with initial data
export const getInitialData = async () => {
  const data = (await ServerRequest.initial()) as InitialRaw

  data.users.forEach(value => {
    UserManager.addUser(value)
  })

  // TODO: Recalculate

  globalSettings.startTime = new Date(data.startTime)
  globalSettings.endTime = new Date(data.endTime)
}
