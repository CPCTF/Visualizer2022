import { apiBasePath } from '#/globals/serverInfos'
import {
  generateInitialData,
  generateRecalculate,
  wait
} from '#/utils/generateDummyData'
import { isDevelop } from './GlobalSettings'
import type { InitialRaw, RecalculateRaw } from './ResponseType'

// TODO: URIは適当
// 返り値も適当

const getJson = (response: Response) => {
  if (response.status !== 200) throw new Error('通信エラー')
  return response.json()
}

export class ServerRequest {
  // 初回ロード
  public static async initial() {
    if (isDevelop) {
      await wait(1000)
      return generateInitialData()
    }
    return (await fetch(`${apiBasePath}/initial`).then(getJson)) as InitialRaw
  }
  public static async recalculate() {
    if (isDevelop) {
      await wait(1000)
      return generateRecalculate()
    }
    const { ranking, circuit } = (await fetch(
      `${apiBasePath}/recalculate`
    ).then(getJson)) as RecalculateRaw
    return {
      ranking,
      circuit
    }
  }
}
