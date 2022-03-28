import { getVolume } from '../../globals'
import clickUpSrc from './clickup.mp3?url'
import clickDownSrc from './clickdown.mp3?url'

const sounds: Record<string, HTMLAudioElement> = {
  mouseup: new Audio(clickUpSrc),
  mousedown: new Audio(clickDownSrc),
  dist: new Audio()
}

export const playSound = (id: string) => {
  if (getVolume() === 0) return
  if (!sounds[id]) return
  if (!sounds[id].paused) {
    sounds[id].pause()
    sounds[id].currentTime = 0
  }
  sounds[id].volume = getVolume()
  sounds[id].play()
}
