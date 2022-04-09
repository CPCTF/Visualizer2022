import { Container, Sprite } from '@inlet/react-pixi'
import { useContext } from 'react'
import { footerHeight } from '../globals'
import { WindowSettingContext } from '../GlobalSetting'
import barSrc from '../utils/FrameTemplate/bar.png'
import { Tab } from './Tab'

export const Footer = () => {
  const {
    width,
    height,
    windowSettings: { windowStack }
  } = useContext(WindowSettingContext)
  return (
    <Container position={[0, height - footerHeight]}>
      <Sprite
        image={barSrc}
        width={width}
        height={footerHeight}
        anchor={0}
        position={[0, 0]}
      />
      <Container position={[200, 0]}>
        {windowStack.map((value: string, index: number) => (
          <Tab key={value} id={value} index={index} />
        ))}
      </Container>
    </Container>
  )
}
