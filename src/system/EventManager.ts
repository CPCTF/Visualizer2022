// import type { QuestionGenre } from './ResponseType'

import { websocketBasePath } from '#/globals/serverInfos'
import { globalSettings } from './GlobalSettings'
import { ServerRequest } from './ServerRequest'
import { UserManager } from './UserManager'

// TODO: tekito type
type WebSocketMessage =
  | {
      type: 'submit'
      result: {
        // userid: string
        // point: number
        // genre: QuestionGenre
        // questionName: string
      }
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
    this.testEvent()
  }
  private testEvent() {
    setInterval(() => {
      this.dispatchEvent(new CustomEvent('recalculate'))
    }, 30000)
  }
  private messageHandler(event: MessageEvent<WebSocketMessage>) {
    switch (event.data.type) {
      case 'submit': {
        this.dispatchEvent(
          new CustomEvent('submission', { detail: event.data.result })
        )
        break
      }
      case 'start': {
        globalSettings.startTime = new Date()
        this.dispatchEvent(new CustomEvent('start'))
        break
      }
      case 'end': {
        globalSettings.endTime = new Date()
        this.dispatchEvent(new CustomEvent('end'))
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
    const { ranking, circuit } = await ServerRequest.recalculate()

    ranking.forEach(user => {
      UserManager.updateUser(user)
    })

    // TODO: set circuit structure
  }
}

export const EventManagerInstance = new EventManager()
