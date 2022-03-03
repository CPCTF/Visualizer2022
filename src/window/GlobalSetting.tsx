import { createContext, ReactNode, useEffect, useState, VFC } from 'react'
import type { WindowInfo } from './stores/WindowSystem'
export interface WindowSettingProps {
  width: number
  height: number
  windowSettings: {
    windows: Record<string, WindowInfo>
    windowIndicies: string[]
    update: (id: string, info: WindowInfo) => void
    kill: (id: string) => void
    focus: (id: string) => void
    minimize: (id: string) => void
  }
}

export const WindowSettingContext = createContext<WindowSettingProps>({
  width: 0,
  height: 0,
  windowSettings: {
    windows: {},
    windowIndicies: [],
    update: () => '',
    kill: () => '',
    focus: () => '',
    minimize: () => ''
  }
})

export const WindowSettingProvider: VFC<{ children: ReactNode }> = ({
  children
}) => {
  const [settings, setSettings] = useState<WindowSettingProps>({
    width: window.innerWidth,
    height: window.innerHeight,
    windowSettings: {
      windows: {},
      windowIndicies: [],
      update: (id: string, info: WindowInfo) => {
        setSettings(nowSetting => {
          const windows = { ...nowSetting.windowSettings.windows }
          windows[id] = info
          const windowIndicies = [...nowSetting.windowSettings.windowIndicies]
          if (!windowIndicies.includes(id)) windowIndicies.push(id)
          return {
            ...nowSetting,
            windowSettings: {
              ...nowSetting.windowSettings,
              windows,
              windowIndicies
            }
          }
        })
      },
      kill: (id: string) => {
        setSettings(nowSetting => {
          const windows = { ...nowSetting.windowSettings.windows }
          delete windows[id]
          const windowIndicies =
            nowSetting.windowSettings.windowIndicies.filter(
              value => value !== id
            )
          return {
            ...nowSetting,
            windowSettings: {
              ...nowSetting.windowSettings,
              windows,
              windowIndicies
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
          const windowIndicies =
            nowSetting.windowSettings.windowIndicies.filter(
              value => value !== id
            )
          windowIndicies.push(id)
          return {
            ...nowSetting,
            windowSettings: {
              ...nowSetting.windowSettings,
              windows,
              windowIndicies
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
          return {
            ...nowSetting,
            windowSettings: {
              ...nowSetting.windowSettings,
              windows
            }
          }
        })
      }
    }
  })

  useEffect(() => {
    const resizeHandler = () => {
      setSettings(nowSettings => ({
        ...nowSettings,
        width: window.innerWidth,
        height: window.innerHeight
      }))
    }
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <WindowSettingContext.Provider value={settings}>
      {children}
    </WindowSettingContext.Provider>
  )
}
