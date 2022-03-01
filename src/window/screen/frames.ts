import type { WindowInfo } from '../stores/WindowSystem'
import CanvasFrame from './instances/CanvasFrame.svelte'
import ClockFrame from './instances/ClockFrame.svelte'

export const dummyWindow = {
  Component: ClockFrame,
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
    title: 'Visualizer',
    rect: {
      x: 0,
      y: 0,
      width: 500,
      height: 500
    },
    visible: true,
    fullscreen: false
  },
  clock: {
    Component: ClockFrame,
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
}
