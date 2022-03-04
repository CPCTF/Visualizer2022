import type { VFC } from 'react'

export interface WindowComponentProps {
  x: number
  y: number
  width: number
  height: number
}
export interface WindowInfo {
  title: string
  rect: {
    x: number
    y: number
    width: number
    height: number
  }
  visible: boolean
  fullscreen: boolean
  Component: VFC<WindowComponentProps> | null
}
