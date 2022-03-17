import { iconSize } from '#/window/globals'
import { WindowSettingContext } from '#/window/GlobalSetting'
import type { IconInfo } from '#/window/stores/Icons'
import { Container, Sprite, Text } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js'
import { useContext, VFC } from 'react'
import { frames } from '../frames'

const fontSize = iconSize / 4

export const Icon: VFC<{ iconInfo: IconInfo; position: [number, number] }> = ({
  iconInfo,
  position
}) => {
  const {
    windowSettings: { windows, update }
  } = useContext(WindowSettingContext)
  const clickHandler = () => {
    const target = frames[iconInfo.id]
    if (windows[iconInfo.id] || !target) return
    update(iconInfo.id, target)
  }
  return (
    <Container position={position} interactive click={clickHandler}>
      <Sprite
        image={iconInfo.src}
        position={[6, 0]}
        width={iconSize - fontSize}
        height={iconSize - fontSize}
      />
      <Text
        text={iconInfo.title}
        anchor={[0.5, 0]}
        position={[iconSize / 2, iconSize - fontSize]}
        style={
          new TextStyle({
            align: 'center',
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: fontSize,
            fill: '#000'
          })
        }
      />
    </Container>
  )
}
