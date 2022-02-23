import { websocketBasePath } from '#/globals/serverInfos'
import type { QuestionGenre } from './ResponseType'

type WebSocketMessage =
  | {
      type: 'submit'
      result: {
        userid: string
        point: number
        genre: QuestionGenre
        questionName: string
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
export class WebSocketReceiver extends EventTarget {
  private websocket: WebSocket
  constructor() {
    super()
    this.websocket = new WebSocket(websocketBasePath)

    this.websocket.addEventListener('message', this.messageHandler.bind(this))

    this.websocket.addEventListener('error', () => {
      this.dispatchEvent(new CustomEvent('disconnect'))
    })
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
        this.dispatchEvent(new CustomEvent('start'))
        break
      }
      case 'end': {
        this.dispatchEvent(new CustomEvent('end'))
        break
      }
      case 'recalculate': {
        this.dispatchEvent(new CustomEvent('recalculate'))
        break
      }
    }
  }
}
