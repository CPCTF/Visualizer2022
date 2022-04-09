import { footerHeight, iconSize } from '#/window/globals'
import { WindowSettingContext } from '#/window/GlobalSetting'
import { Container, Sprite } from '@inlet/react-pixi'
import { useContext } from 'react'
import { Icon } from './Icon'
import bgImgSrc from './xp.jpg'
import { frames } from '../frames'

const iconMargin = 12

export const Background = () => {
  const { width, height } = useContext(WindowSettingContext)

  const row = Math.max(
    1.0,
    Math.floor((height - footerHeight - (iconSize + iconMargin)) / iconSize)
  )
  return (
    <>
      <Sprite
        image={bgImgSrc}
        anchor={0}
        x={0}
        y={0}
        width={width}
        height={height - footerHeight}
      />
      <Container position={[iconSize / 2, iconSize / 2]}>
        {Object.entries(frames).map(([id, iconInfo], index) => (
          <Icon
            key={id}
            id={id}
            iconInfo={iconInfo}
            position={[
              Math.floor(index / row) * (iconSize + iconMargin),
              (index % row) * (iconSize + iconMargin)
            ]}
          />
        ))}
      </Container>
    </>
  )
}
