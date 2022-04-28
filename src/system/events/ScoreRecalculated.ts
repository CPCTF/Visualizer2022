import { EventEmitter } from '#/system/EventEmitter'
import { ServerRequest } from '#/system/ServerRequest'
import { UserManager } from '#/system/UserManager'
import { wait } from '#/utils/generateDummyData'
import { CircuitManager } from '#/circuit/CliantScript/CircuitManager'

export const scoreRecalculated = () => {
  const delay = async () => {
    EventEmitter.emit('recalculatestart')
    await setRecalculateData()
    EventEmitter.emit('recalculateend')
  }
  delay()
}

const setRecalculateData = async () => {
  const recalculateData = await ServerRequest.recalculate()
  if (!recalculateData) return
  const { ranking, circuit } = recalculateData
  ranking.forEach(user => {
    UserManager.updateUser(user)
  })

  UserManager.updateRanking()

  await wait(4000)

  CircuitManager.setCircuitInfo(JSON.stringify(circuit))
}
