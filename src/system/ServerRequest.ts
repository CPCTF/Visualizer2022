import {
  generateInitialData,
  generateRecalculate,
  wait
} from '#/utils/generateDummyData'
import { isDevelop } from './GlobalSettings'
import type { InitialRaw, RecalculateRaw } from './ResponseType'

const getJson = (response: Response) => {
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
    const usersFetch = fetch('/api/users').then(getJson)
    const recalculateFetch = this.recalculate()
    const timeFetch = fetch('/api/schedule').then(getJson)

    const [users, recalculate, time] = await Promise.all([
      usersFetch,
      recalculateFetch,
      timeFetch
    ])

    return {
      users,
      recalculate,
      startTime: time.startTime,
      endTime: time.endTime
    }
  }
  public static async recalculate(): Promise<RecalculateRaw> {
    if (isDevelop) {
      await wait(1000)
      return generateRecalculate()
    }
    const circuitFetch = fetch('/visualizer/circuit.json').then(getJson)
    const rankingFetch = fetch('/api/ranking?includeAdmin=false').then(getJson)

    const [circuit, ranking] = await Promise.all([circuitFetch, rankingFetch])

    return {
      circuit,
      ranking
    }
  }
}
