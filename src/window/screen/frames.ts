import type { WindowInfo } from '../stores/WindowSystem'
import { CanvasFrame } from './instances/CanvasFrame'
import { ClockFrame } from './instances/ClockFrame'
import { ReadmeFrame } from './instances/Readme'
import { SpriteHolder } from '../stores/SpriteHolder'
import { RankingFrame } from './instances/RankingFrame'

export const dummyWindow = {
  Component: null,
  icon: () => SpriteHolder.get('Clock.png'),
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
    icon: () => SpriteHolder.get('Visualizer.png'),
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
    icon: () => SpriteHolder.get('Clock.png'),
    title: 'Clock',
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
    icon: () => SpriteHolder.get('ReadMe.png'),
    title: 'Readme.txt',
    rect: {
      x: 0,
      y: 0,
      width: 850,
      height: 600
    },
    visible: true,
    fullscreen: false
  },
  ranking: {
    Component: RankingFrame,
    icon: () => SpriteHolder.get('Ranking.png'),
    title: 'Ranking',
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
