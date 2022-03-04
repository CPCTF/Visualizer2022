import { createContext, ReactNode, useEffect, useState, VFC } from 'react'
import { WindowSettingProps, WindowSystemHooks } from './stores/WindowSystem'

export const WindowSettingContext = createContext<WindowSettingProps>({
  width: 0,
  height: 0,
  windowSettings: {
    windows: {},
    windowIndices: [],
    windowStack: [],
    focused: '',
    update: () => '',
    kill: () => '',
    focus: () => '',
    minimize: () => ''
  }
})

export const WindowSettingProvider: VFC<{ children: ReactNode }> = ({
  children
}) => {
  const [settings, resizeHandler] = WindowSystemHooks()

  useEffect(() => {
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
