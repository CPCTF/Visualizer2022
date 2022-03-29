import { iconSize } from '#/window/globals'
import { WindowSettingContext } from '#/window/GlobalSetting'
import type { IconInfo } from '#/window/stores/Icons'
import { Container, Graphics, Sprite, Text } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js'
import { useCallback, useContext, useRef, VFC } from 'react'
import { frames } from '../frames'

const fontSize = iconSize / 5

export const Icon: VFC<{ iconInfo: IconInfo; position: [number, number] }> = ({
  iconInfo,
  position
}) => {
  const {
    windowSettings: { windows, update, starting }
  } = useContext(WindowSettingContext)
  const clickRef = useRef(0)
  const clickHandler = () => {
    const prev = clickRef.current
    clickRef.current = performance.now()
    if (clickRef.current - prev > 600) return
    const target = frames[iconInfo.id]
    if (windows[iconInfo.id] || !target) return
    update(iconInfo.id, target)
  }
  const draw = useCallback(
    g => {
      g.clear()
      if (starting === iconInfo.id) {
        g.beginFill(0xaaaaff, 0.5)
        g.drawRect(0, 0, iconSize, iconSize)
      }
    },
    [starting]
  )
  return (
    <Container position={position} interactive click={clickHandler}>
      <Graphics draw={draw} />
      <Sprite
        image={iconInfo.src}
        position={[fontSize / 2, 0]}
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
