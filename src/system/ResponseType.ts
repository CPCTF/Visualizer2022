// TODO: 型修正
export interface UserRaw {
  id: string
  displayName: string
  iconPath: string
}

export interface UserRankingRaw {
  id: string
  displayName: string
  iconPath: string
  point: number
  ranking: number
}

// TODO: ジャンル追加
export type QuestionGenre = 'nanika' | 'doreka' | 'tekito'
