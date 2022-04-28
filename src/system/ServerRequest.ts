import { apiBasePath } from '#/globals/serverInfos'
import {
  generateInitialData,
  generateRecalculate,
  wait
} from '#/utils/generateDummyData'
import { isDevelop } from './GlobalSettings'
import type { InitialRaw, RecalculateRaw } from './ResponseType'

const getJson = (response: Response) => {
  console.log(response)
  if (response.status !== 200) throw new Error('通信エラー')
  return response.json()
}

export class ServerRequest {
  // 初回ロード
  public static async initial(): Promise<InitialRaw> {
    if (isDevelop) {
      await wait(1000)
      return generateInitialData()
    }
    const usersFetch = fetch(`${apiBasePath}/users`, { mode: 'no-cors' }).then(
      getJson
    )
    const recalculateFetch = this.recalculate()
    const timeFetch = fetch(`${apiBasePath}/schedule`, {
      mode: 'no-cors'
    }).then(getJson)

    const [users, recalculate, time] = await Promise.all([
      usersFetch,
      recalculateFetch,
      timeFetch
    ])

    return {
      users,
      recalculate,
      startTime: time.starttime,
      endTime: time.endtime
    }
  }
  public static async recalculate(): Promise<RecalculateRaw | null> {
    if (isDevelop) {
      await wait(1000)
      return generateRecalculate()
    }
    try {
      const circuitFetch = fetch(`./circuit.json`, {
        mode: 'no-cors'
      }).then(getJson)
      const rankingFetch = fetch(`${apiBasePath}/ranking`, {
        mode: 'no-cors'
      }).then(getJson)

      const [circuit, ranking] = await Promise.all([circuitFetch, rankingFetch])

      return {
        circuit,
        ranking
      }
    } catch (e) {
      return null
    }
  }
}
