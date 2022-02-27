import { apiBasePath } from '#/globals/serverInfos'

// TODO: URIは適当
// 返り値も適当

const getJson = (response: Response) => {
  if (response.status !== 200) throw new Error('通信エラー')
  return response.json()
}

export class ServerRequest {
  // 初回ロード
  public static async initial() {
    return fetch(`${apiBasePath}/initial`).then(getJson)
  }
  public static async recalculate() {
    const result = await Promise.all([
      fetch(`${apiBasePath}/ranking`).then(getJson),
      fetch(`${apiBasePath}/circuit`).then(getJson)
    ])
    return {
      ranking: result[0],
      circuit: result[1]
    }
  }
}
