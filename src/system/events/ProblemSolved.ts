import { EventEmitter } from '#/system/EventEmitter'
import { QuestionGenreList } from '#/system/ResponseType'

export interface ProblemSolvedData {
  userId: string
  point: number
  genre: number
  challengeName: string
}

export const problemSolved = ({
  userId,
  point,
  genre,
  challengeName: title
}: ProblemSolvedData) => {
  EventEmitter.emit('submit', {
    userId,
    point,
    genre: QuestionGenreList[genre],
    title
  })
}
