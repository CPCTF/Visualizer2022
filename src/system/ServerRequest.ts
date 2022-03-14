import { apiBasePath } from '#/globals/serverInfos'
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
    return (await fetch(`${apiBasePath}/initial`).then(getJson)) as InitialRaw
  }
  public static async recalculate() {
    const { ranking, circuit } = (await fetch(
      `${apiBasePath}/recalculate`
    ).then(getJson)) as RecalculateRaw
    return {
      ranking,
      circuit
    }
  }
}
