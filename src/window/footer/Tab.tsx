import { useContext, useMemo, VFC } from 'react'
import { WindowSettingContext } from '../GlobalSetting'
import tabOnSrc from './tab-on.png'
import tabOffSrc from './tab-off.png'
import { BaseTexture, TextStyle, Texture } from 'pixi.js'
import { footerHeight } from '../globals'
import { Container, Sprite, Text } from '@inlet/react-pixi'

const tabWidth = 200

export const Tab: VFC<{ id: string; index: number }> = ({ id, index }) => {
  const {
    windowSettings: { windows, focused, focus, minimize }
  } = useContext(WindowSettingContext)
  const target = windows[id]

  if (!target) return <>null</>

  const { title, visible } = target

  const tabOn = useMemo(() => new Texture(new BaseTexture(tabOnSrc)), [])
  const tabOff = useMemo(() => new Texture(new BaseTexture(tabOffSrc)), [])

  return (
    <Container
      position={[index * tabWidth, footerHeight / 2]}
      interactive
      click={() => (focused === id ? minimize(id) : focus(id))}
    >
      <Sprite
        width={tabWidth * 0.9}
        height={footerHeight * 0.9}
        texture={visible ? tabOn : tabOff}
        anchor={[0, 0.5]}
        position={[0, 0]}
      />
      <Text
        text={title}
        anchor={[0, 0.5]}
        position={[0, 0]}
        style={
          new TextStyle({
            align: 'center',
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: footerHeight * 0.5 * 0.8,
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#01d27e',
            strokeThickness: 5,
            letterSpacing: 20,
            dropShadow: true,
            dropShadowColor: '#ccced2',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440
          })
        }
      />
    </Container>
  )
}
