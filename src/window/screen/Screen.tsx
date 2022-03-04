import { useContext } from 'react'
import { WindowSettingContext } from '../GlobalSetting'
import { Background } from './background/Background'
import { Frame } from './Frame'
import { dummyWindow } from './frames'

export const Screen = () => {
  const {
    windowSettings: { windows, windowIndices: windowIndices }
  } = useContext(WindowSettingContext)
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
