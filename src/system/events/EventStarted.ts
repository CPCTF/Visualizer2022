import { EventEmitter } from '#/system/EventEmitter'

export const eventStarted = () => {
  EventEmitter.emit('start')
}
