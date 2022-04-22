import { EventEmitter } from '#/system/EventEmitter'

export const eventEnded = () => {
  EventEmitter.emit('end')
}
