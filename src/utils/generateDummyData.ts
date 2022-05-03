/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  InitialRaw,
  QuestionGenreList,
  RecalculateRaw
} from '#/system/ResponseType'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import circuitJson from './circuit.json'
import type { ProblemSolvedData } from '#/system/events/ProblemSolved'

const users = new Array(100).fill(null).map((_, index) => ({
  id: `user${index}`,
  name: `USER${index}`,
  iconUrl: `${location.protocol}//${location.host}/icons/user${index}.png`,
  point: 0,
  rank: -1
}))

export const generateSubmission = (): ProblemSolvedData => {
  return {
    userId: users[Math.floor(Math.random() * users.length)].id,
    point: Math.random() * 1000,
    genre: Math.floor(Math.random() * QuestionGenreList.length),
    challengeName: `Dummy Problem Title`
  }
}

export const generateRecalculate = (): RecalculateRaw => {
  users.forEach(value => {
    value.point += Math.random() * 1000
  })
  users.sort((user1, user2) => user2.point - user1.point)
  users.forEach((value, index) => {
    value.rank = index + 1
  })
  return {
    ranking: users.map(({ id, point }) => ({
      id,
      score: point,
      scoreLogs: []
    })),
    circuit: circuitJson
  }
}

export const generateInitialData = (): InitialRaw => {
  const startDate = new Date()
  startDate.setMinutes(startDate.getMinutes() - 15)
  const endDate = new Date()
  endDate.setMinutes(endDate.getMinutes() + 15)

  return {
    users: users.map(({ id, name, iconUrl }) => ({
      id,
      userName: name,
      iconUrl
    })),
    startTime: startDate.toString(),
    endTime: endDate.toString()
  }
}

export const generateWebSocketMessage = (
  info: Record<string, any>
): MessageEvent<string> => {
  return {
    data: `{ type: 0, data: null }`,
    lastEventId: '',
    origin: '',
    ports: [],
    source: null,
    initMessageEvent: function (
      _type: string,
      _bubbles?: boolean,
      _cancelable?: boolean,
      _data?: any,
      _origin?: string,
      _lastEventId?: string,
      _source?: MessageEventSource | null,
      _ports?: MessagePort[]
    ): void {
      throw new Error('Function not implemented.')
    },
    bubbles: false,
    cancelBubble: false,
    cancelable: false,
    composed: false,
    currentTarget: null,
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    returnValue: false,
    srcElement: null,
    target: null,
    timeStamp: 0,
    type: '',
    composedPath: function (): EventTarget[] {
      throw new Error('Function not implemented.')
    },
    initEvent: function (
      _type: string,
      _bubbles?: boolean,
      _cancelable?: boolean
    ): void {
      throw new Error('Function not implemented.')
    },
    preventDefault: function (): void {
      throw new Error('Function not implemented.')
    },
    stopImmediatePropagation: function (): void {
      throw new Error('Function not implemented.')
    },
    stopPropagation: function (): void {
      throw new Error('Function not implemented.')
    },
    AT_TARGET: 0,
    BUBBLING_PHASE: 0,
    CAPTURING_PHASE: 0,
    NONE: 0,
    ...info
  }
}

export const wait = (ms: number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), ms)
  })
}
