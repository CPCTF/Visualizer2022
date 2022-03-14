import type { InitialRaw, UserRankingRaw } from '#/system/ResponseType'
import { ServerRequest } from '#/system/ServerRequest'
import { globalSettings } from '#/system/GlobalSettings'
import { UserManager } from '#/system/UserManager'

// setup with initial data
export const getInitialData = async () => {
  // const data = (await ServerRequest.initial()) as InitialRaw

  // data.users.forEach(value => {
  //   UserManager.addUser(value)
  // })

  // TODO: Recalculate

  // globalSettings.startTime = new Date(data.startTime)
  // globalSettings.endTime = new Date(data.endTime)
  const startDate = new Date()
  startDate.setMinutes(startDate.getMinutes() - 5)
  const endDate = new Date()
  endDate.setMinutes(endDate.getMinutes() + 5)
  globalSettings.startTime = startDate
  globalSettings.endTime = endDate
}
