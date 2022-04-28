import { Container, Sprite } from '@inlet/react-pixi'
import { useContext } from 'react'
import { footerHeight } from '../globals'
import { WindowSettingContext } from '../GlobalSetting'
import { SpriteHolder } from '../stores/SpriteHolder'
import { Tab } from './Tab'

export const Footer = () => {
  const {
    width,
    height,
    windowSettings: { windowStack }
  } = useContext(WindowSettingContext)
  const bar = SpriteHolder.get('WindowTitleBarActive.png')
  return (
    <Container position={[0, height - footerHeight]}>
      {bar ? (
        <Sprite
          texture={bar}
          width={width}
          height={footerHeight}
          anchor={0}
          position={[0, 0]}
        />
      ) : null}
      <Container position={[200, 0]}>
        {windowStack.map((value: string, index: number) => (
          <Tab key={value} id={value} index={index} />
        ))}
      </Container>
    </Container>
  )
}
