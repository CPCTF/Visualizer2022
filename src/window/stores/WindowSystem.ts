import type { ReactNode } from 'react'

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
  Component: ReactNode
}
