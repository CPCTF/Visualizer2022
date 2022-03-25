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

// TODO: tekito type
export type WebSocketMessage =
  | {
      type: 'submit'
      result: SubmissionRaw
    }
  | {
      type: 'start'
    }
  | {
      type: 'end'
    }
  | {
      type: 'recalculate'
    }

class EventManager extends EventTarget {
  private websocket: WebSocket
  constructor() {
    super()
    this.websocket = new WebSocket(websocketBasePath)
    this.websocket.addEventListener('message', this.messageHandler.bind(this))
    this.websocket.addEventListener('error', () => {
      this.dispatchEvent(new CustomEvent('disconnect'))
    })
    // test
    if (isDevelop) this.testEvent()
  }
  private testEvent() {
    setInterval(() => {
      this.messageHandler(
        generateWebSocketMessage({
          data: {
            type: 'recalculate'
          }
        })
      )
    }, 30000)
    setInterval(() => {
      this.messageHandler(
        generateWebSocketMessage({
          data: {
            type: 'end'
          }
        })
      )
    }, 300000)
    setInterval(() => {
      this.messageHandler(
        generateWebSocketMessage({
          data: {
            type: 'submit',
            result: generateSubmission()
          }
        })
      )
    }, 3000)
  }

  public initialized() {
    this.dispatchEvent(new CustomEvent('initialized'))
  }

  public visualizerStart() {
    this.dispatchEvent(new CustomEvent('visualizerstart'))
  }

  private messageHandler(event: MessageEvent<WebSocketMessage>) {
    switch (event.data.type) {
      case 'submit': {
        this.dispatchEvent(
          new CustomEvent('submit', {
            detail: event.data.result
          })
        )
        break
      }
      case 'start': {
        globalSettings.startTime = new Date()
        this.dispatchEvent(new CustomEvent('ctfstart'))
        break
      }
      case 'end': {
        globalSettings.endTime = new Date()
        this.dispatchEvent(new CustomEvent('ctfend'))
        break
      }
      case 'recalculate': {
        const delay = async () => {
          this.dispatchEvent(new CustomEvent('recalculatestart'))
          await this.setRecalculateData()
          this.dispatchEvent(new CustomEvent('recalculateend'))
        }
        delay()
        break
      }
    }
  }

  private async setRecalculateData() {
    const { ranking } = await ServerRequest.recalculate()

    ranking.forEach(user => {
      UserManager.updateUser(user)
    })

    UserManager.updateRanking()

    await wait(4000)

    // TODO: set circuit structure
  }
}

export const EventManagerInstance = new EventManager()
