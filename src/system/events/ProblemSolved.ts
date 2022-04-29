import { EventEmitter } from '#/system/EventEmitter'
import { QuestionGenreList } from '#/system/ResponseType'

export interface ProblemSolvedData {
  userId: string
  point: number
  genre: number
  title: string
}

export const problemSolved = ({
  userId,
  point,
  genre,
  title
}: ProblemSolvedData) => {
  EventEmitter.emit('submit', {
    userId,
    point,
    genre: QuestionGenreList[genre],
    title
  })
}
