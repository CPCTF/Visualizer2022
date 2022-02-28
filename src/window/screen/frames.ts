import type { WindowInfo } from '../stores/WindowSystem'
import CanvasFrame from './instances/CanvasFrame.svelte'
import ClockFrame from './instances/ClockFrame.svelte'

export const frames: Record<string, WindowInfo> = {
  canvas: {
    Component: CanvasFrame,
    title: 'Visualizer',
    rect: {
      x: 0,
      y: 0,
      width: 500,
      height: 500
    },
    visible: true
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
    visible: true
  }
}
