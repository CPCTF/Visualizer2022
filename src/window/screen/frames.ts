import type { WindowInfo } from '../stores/WindowSystem'

export const dummyWindow = {
  Component: null,
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
    Component: null,
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
    Component: null,
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
