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

  // すぐさま実行するとイベント未登録のオブジェクトで再計算イベントが発生しない
  // 再計算直前とかにページ読むとバグる気がするけど:genba_cat:
  setTimeout(() => {
    scoreRecalculated()
  }, 4500)
}
