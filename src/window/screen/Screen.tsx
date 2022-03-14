import { EventManagerInstance } from '#/system/EventManager'
import { globalSettings } from '#/system/GlobalSettings'
import { useTick } from '@inlet/react-pixi'
import { useContext, useEffect, useState } from 'react'
import { WindowSettingContext } from '../GlobalSetting'
import { clearCursorIcon, getCursorIcon } from '../stores/cursorIcon'
import { Background } from './background/Background'
import { Frame } from './Frame'
import { dummyWindow } from './frames'
import { YouAreAnIdiot } from './virus/YouAreAnIdiot'

export const Screen = () => {
  const {
    width,
    height,
    windowSettings: { windows, windowIndices: windowIndices }
  } = useContext(WindowSettingContext)
  useTick(() => {
    document.body.style.cursor = getCursorIcon() || 'default'
    clearCursorIcon()
  })
  const [isEnded, setIsEnded] = useState(false)
  useEffect(() => {
    const initialized = () => {
      const now = new Date().getTime()
      const end = globalSettings.endTime.getTime()
      if (end < now) setIsEnded(true)
    }
    const ctfend = () => {
      setIsEnded(true)
    }
    EventManagerInstance.addEventListener('initialized', initialized)
    EventManagerInstance.addEventListener('ctfend', ctfend)

    return () => {
      EventManagerInstance.removeEventListener('initialized', initialized)
      EventManagerInstance.removeEventListener('ctfend', ctfend)
    }
  }, [])
  return (
    <>
      <Background />
      {windowIndices.map(id => (
        <Frame
          windowInfo={windows[id] || dummyWindow}
          id={id}
          focus={false}
          key={id}
        />
      ))}
      {isEnded ? <YouAreAnIdiot width={width} height={height} /> : null}
    </>
  )
}
