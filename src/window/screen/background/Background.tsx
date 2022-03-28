import { footerHeight, iconSize } from '#/window/globals'
import { WindowSettingContext } from '#/window/GlobalSetting'
import { icons } from '#/window/stores/Icons'
import { Container, Sprite } from '@inlet/react-pixi'
import { useContext } from 'react'
import { Icon } from './Icon'
import bgImgSrc from './xp.jpg'

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
        {icons.map((iconInfo, index) => (
          <Icon
            key={iconInfo.id}
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
