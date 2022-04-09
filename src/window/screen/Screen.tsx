import { EventEmitter } from '#/system/EventEmitter'
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
    windowSettings: { windows, windowIndices: windowIndices, starting }
  } = useContext(WindowSettingContext)
  useTick(() => {
    document.body.style.cursor = starting
      ? 'wait'
      : getCursorIcon() || 'default'
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
    EventEmitter.on('initialized', initialized)
    EventEmitter.on('end', ctfend)

    return () => {
      EventEmitter.off('initialized', initialized)
      EventEmitter.off('end', ctfend)
    }
  }, [])
  return (
    <>
      <Background />
      {windowIndices.map((id, index) => (
        <Frame
          windowInfo={windows[id] || dummyWindow}
          id={id}
          focus={index === windowIndices.length - 1}
          key={id}
        />
      ))}
      {isEnded ? <YouAreAnIdiot width={width} height={height} /> : null}
    </>
  )
}
