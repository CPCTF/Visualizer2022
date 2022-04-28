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

export interface CircuitRaw {
  data: string
}
export interface RecalculateRaw {
  ranking: UserRankingRaw[]
  circuit: CircuitRaw
}

export interface InitialRaw {
  users: UserRaw[]
  recalculate: RecalculateRaw | null
  startTime: string
  endTime: string
}

export interface SubmissionRaw {
  userid: string
  point: number
  genre: QuestionGenre
  title: string
}

export const QuestionGenreList = [
  'PPC',
  'Web',
  'Crypto',
  'Reversing',
  'Pwn',
  'Misc',
  'Shell',
  'Forensics',
  'OSINT'
] as const
// TODO: ジャンル追加
export type QuestionGenre = typeof QuestionGenreList[number]
