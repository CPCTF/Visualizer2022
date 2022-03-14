// TODO: 型修正
export interface UserRankingRaw {
  id: string
  name: string
  iconUrl: string
  rank: number
  point: number
}

export interface UserRaw {
  id: string
  name: string
  iconUrl: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CircuitRaw {}
export interface RecalculateRaw {
  ranking: UserRankingRaw[]
  circuit: CircuitRaw
}

export interface InitialRaw {
  users: UserRaw[]
  recalculate: RecalculateRaw
  startTime: string
  endTime: string
}

// TODO: ジャンル追加
export type QuestionGenre = 'nanika' | 'doreka' | 'tekito'