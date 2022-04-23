import { useContext, useMemo, VFC } from 'react'
import { WindowSettingContext } from '../GlobalSetting'
import tabOnSrc from './tab-on.png'
import tabOffSrc from './tab-off.png'
import { BaseTexture, TextStyle, Texture } from 'pixi.js'
import { footerHeight, tabWidth } from '../globals'
import { Container, Sprite, Text } from '@inlet/react-pixi'

export const Tab: VFC<{ id: string; index: number }> = ({ id, index }) => {
  const {
    windowSettings: { windows, focused, focus, minimize }
  } = useContext(WindowSettingContext)
  const target = windows[id]

  if (!target) return <>{null}</>

  const { title, visible } = target

  const tabOn = useMemo(() => new Texture(new BaseTexture(tabOnSrc)), [])
  const tabOff = useMemo(() => new Texture(new BaseTexture(tabOffSrc)), [])

  const icon = target.icon()
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
      {icon ? (
        <Sprite
          width={footerHeight * 0.6}
          height={footerHeight * 0.6}
          texture={icon}
          anchor={[0, 0.5]}
          position={[7, 0]}
        />
      ) : null}
      <Text
        text={title}
        anchor={[0, 0.5]}
        position={[14 + footerHeight * 0.6, 0]}
        style={
          new TextStyle({
            align: 'center',
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: footerHeight * 0.5 * 0.8,
            fill: '#000'
          })
        }
      />
    </Container>
  )
}
