import { ServerRequest } from '#/system/ServerRequest'
import { globalSettings } from '#/system/GlobalSettings'
import { UserManager } from '#/system/UserManager'
import { scoreRecalculated } from '#/system/events/ScoreRecalculated'

// setup with initial data
export const getInitialData = async () => {
  const data = await ServerRequest.initial()

  data.users.forEach(value => {
    UserManager.addUser(value)
  })

  globalSettings.startTime = new Date(data.startTime)
  globalSettings.endTime = new Date(data.endTime)

  scoreRecalculated()
}
