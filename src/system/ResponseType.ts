import type {
  CircuitBasisInfo,
  CircuitPartsInfo,
  CircuitWiresInfo
} from '#/circuit/BothScript/CircuitInfo'

interface UserScoreLogRaw {
  id: string
  challengeId: string
  acquiredScore: number
  createdAt: string
}
export interface UserRankingRaw {
  id: string
  score: number
  scoreLogs: UserScoreLogRaw[]
}

export interface UserRaw {
  id: string
  userName: string
  iconUrl: string
  freshman?: boolean
  admin?: boolean
  twitterScreenName?: string
}

export interface UserScoreRaw {
  id: string
  score: number
}

export type CircuitRaw = [
  CircuitBasisInfo,
  CircuitPartsInfo[],
  CircuitWiresInfo[]
]
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
  userId: string
  point: number
  genre: QuestionGenre
  title: string
}

export const QuestionGenreList = [
  'PPC',
  'Web',
  'Crypto',
  'Binary',
  'Pwn',
  'Misc',
  'Shell',
  'Forensics',
  'OSINT'
] as const
// TODO: ジャンル追加
export type QuestionGenre = typeof QuestionGenreList[number]
