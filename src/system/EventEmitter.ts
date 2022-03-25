// import type { QuestionGenre } from './ResponseType'

import { websocketBasePath } from '#/globals/serverInfos'
import {
  generateSubmission,
  generateWebSocketMessage,
  wait
} from '#/utils/generateDummyData'
import { globalSettings, isDevelop } from './GlobalSettings'
import type { SubmissionRaw } from './ResponseType'
import { ServerRequest } from './ServerRequest'
import { UserManager } from './UserManager'
import mitt from 'mitt'

export type VisualizerEvents = {
  initialized: void
  submit: SubmissionRaw
  start: void
  end: void
  recalculatestart: void
  recalculateend: void
  disconnect: void
}

export const EventEmitter = mitt<VisualizerEvents>()

export const initializeEventEmitter = () => {
  const websocket = new WebSocket(websocketBasePath)
  websocket.addEventListener('message', messageHandler.bind(this))
  websocket.addEventListener('error', () => {
    EventEmitter.emit('disconnect')
  })
  // test
  if (isDevelop) testEvent()
}

export const emitInitializedEvent = () => {
  EventEmitter.emit('initialized')
}

const testEvent = () => {
  setInterval(() => {
    messageHandler(
      generateWebSocketMessage({
        data: {
          type: 'recalculate'
        }
      })
    )
  }, 30000)
  setInterval(() => {
    messageHandler(
      generateWebSocketMessage({
        data: {
          type: 'end'
        }
      })
    )
  }, 300000)
  setInterval(() => {
    messageHandler(
      generateWebSocketMessage({
        data: {
          type: 'submit',
          result: generateSubmission()
        }
      })
    )
  }, 3000)
}

const messageHandler = (
  event: MessageEvent<{ type: string; result: unknown }>
) => {
  switch (event.data.type) {
    case 'submit': {
      EventEmitter.emit('submit', event.data.result as SubmissionRaw)
      break
    }
    case 'start': {
      globalSettings.startTime = new Date()
      EventEmitter.emit('start')
      break
    }
    case 'end': {
      globalSettings.endTime = new Date()
      EventEmitter.emit('end')
      break
    }
    case 'recalculate': {
      const delay = async () => {
        EventEmitter.emit('recalculatestart')
        await setRecalculateData()
        EventEmitter.emit('recalculateend')
      }
      delay()
      break
    }
  }
}

const setRecalculateData = async () => {
  const { ranking } = await ServerRequest.recalculate()

  ranking.forEach(user => {
    UserManager.updateUser(user)
  })

  UserManager.updateRanking()

  await wait(4000)

  // TODO: set circuit structure
}
