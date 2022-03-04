import { useState, VFC } from 'react'

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

export interface WindowSettingProps {
  width: number
  height: number
  windowSettings: {
    windows: Record<string, WindowInfo>
    windowIndices: string[]
    windowStack: string[]
    focused: string
    update: (id: string, info: WindowInfo) => void
    kill: (id: string) => void
    focus: (id: string) => void
    minimize: (id: string) => void
  }
}

export const WindowSystemHooks = (): [WindowSettingProps, () => void] => {
  const [settings, setSettings] = useState<WindowSettingProps>({
    width: window.innerWidth,
    height: window.innerHeight,
    windowSettings: {
      windows: {},
      windowIndices: [],
      windowStack: [],
      focused: '',
      update: (id: string, info: WindowInfo) => {
        setSettings(nowSetting => {
          const windows = { ...nowSetting.windowSettings.windows }
          windows[id] = info
          const windowIndices = [...nowSetting.windowSettings.windowIndices]
          const windowStack = [...nowSetting.windowSettings.windowStack]
          if (!windowIndices.includes(id)) {
            windowStack.push(id)
            windowIndices.push(id)
          }
          return {
            ...nowSetting,
            windowSettings: {
              ...nowSetting.windowSettings,
              windows,
              windowIndices,
              windowStack
            }
          }
        })
      },
      kill: (id: string) => {
        setSettings(nowSetting => {
          const windows = { ...nowSetting.windowSettings.windows }
          delete windows[id]
          const windowIndices = nowSetting.windowSettings.windowIndices.filter(
            value => value !== id
          )
          const windowStack = nowSetting.windowSettings.windowStack.filter(
            value => value !== id
          )
          const visibles = windowIndices.filter(id => windows[id]?.visible)
          const focused =
            visibles.length > 0 ? (visibles[visibles.length - 1] as string) : ''
          return {
            ...nowSetting,
            windowSettings: {
              ...nowSetting.windowSettings,
              windows,
              windowIndices,
              windowStack,
              focused
            }
          }
        })
      },
      focus: (id: string) => {
        setSettings(nowSetting => {
          const windows = { ...nowSetting.windowSettings.windows }
          const target = windows[id]
          if (!target) throw new Error('invalid id')
          windows[id] = {
            ...target,
            visible: true
          }
          const windowIndices = nowSetting.windowSettings.windowIndices.filter(
            value => value !== id
          )
          windowIndices.push(id)
          return {
            ...nowSetting,
            windowSettings: {
              ...nowSetting.windowSettings,
              windows,
              windowIndices,
              focused: id
            }
          }
        })
      },
      minimize: (id: string) => {
        setSettings(nowSetting => {
          const windows = { ...nowSetting.windowSettings.windows }
          const target = windows[id]
          if (!target) throw new Error('invalid id')
          windows[id] = {
            ...target,
            visible: false
          }
          const visibles = nowSetting.windowSettings.windowIndices.filter(
            value => value !== id && windows[value]?.visible
          )
          const focused =
            visibles.length > 0 ? (visibles[visibles.length - 1] as string) : ''
          return {
            ...nowSetting,
            windowSettings: {
              ...nowSetting.windowSettings,
              windows,
              focused
            }
          }
        })
      }
    }
  })

  const resizeHandler = () => {
    setSettings(nowSettings => ({
      ...nowSettings,
      width: window.innerWidth,
      height: window.innerHeight
    }))
  }

  return [settings, resizeHandler]
}
