import { useContext } from 'react'
import { WindowSettingContext } from '../GlobalSetting'
import { Background } from './background/Background'
import { Frame } from './Frame'
import { dummyWindow } from './frames'

export const Screen = () => {
  const {
    windowSettings: { windows, windowIndicies }
  } = useContext(WindowSettingContext)
  return (
    <>
      <Background />
      {windowIndicies.map(id => (
        <Frame windowInfo={windows[id] || dummyWindow} id={id} focus={false} />
      ))}
    </>
  )
}
