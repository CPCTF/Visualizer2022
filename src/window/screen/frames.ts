import type { WindowInfo } from '../stores/WindowSystem'
import { CanvasFrame } from './instances/CanvasFrame'
import { ClockFrame } from './instances/ClockFrame'
import { ReadmeFrame } from './instances/Readme'
import iconSrc from './icons/clock-icon.png'
import visualizerSrc from './icons/visualizer-icon.png'
import { Texture } from 'pixi.js'

const testIcon = Texture.from(iconSrc)

export const dummyWindow = {
  Component: null,
  icon: testIcon,
  title: 'Clock',
  rect: {
    x: 0,
    y: 0,
    width: 500,
    height: 500
  },
  visible: true,
  fullscreen: false
}

export const frames: Record<string, WindowInfo> = {
  visualizer: {
    Component: CanvasFrame,
    icon: Texture.from(visualizerSrc),
    title: 'Visualizer',
    rect: {
      x: 0,
      y: 0,
      width: 500,
      height: 500
    },
    visible: true,
    fullscreen: true
  },
  clock: {
    Component: ClockFrame,
    icon: testIcon,
    title: 'Clock.exe',
    rect: {
      x: 0,
      y: 0,
      width: 500,
      height: 500
    },
    visible: true,
    fullscreen: false
  },
  readme: {
    Component: ReadmeFrame,
    icon: testIcon,
    title: 'Readme.txt',
    rect: {
      x: 0,
      y: 0,
      width: 850,
      height: 600
    },
    visible: true,
    fullscreen: false
  }
}
