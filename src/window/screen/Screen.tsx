import { useTick } from '@inlet/react-pixi'
import { useContext } from 'react'
import { WindowSettingContext } from '../GlobalSetting'
import { clearCursorIcon, getCursorIcon } from '../stores/cursorIcon'
import { Background } from './background/Background'
import { Frame } from './Frame'
import { dummyWindow } from './frames'

export const Screen = () => {
  const {
    windowSettings: { windows, windowIndices: windowIndices }
  } = useContext(WindowSettingContext)
  useTick(() => {
    document.body.style.cursor = getCursorIcon() || 'default'
    clearCursorIcon()
  })
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
    </>
  )
}
