import type { ReactNode, VFC } from 'react'
import { Sprite } from '@inlet/react-pixi'
import { scaling, windowHeaderEdge, windowHeaderHeight } from '#/window/globals'
import { SpriteHolder } from '#/window/stores/SpriteHolder'

export const getFrameIconSize = () =>
  (windowHeaderHeight - windowHeaderEdge * 2) * 0.9

const iconAspect = 16 / 14

export const FrameIcons: VFC<{
  onKill?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
}> = ({ onKill, onMinimize, onMaximize }) => {
  const icons: ReactNode[] = []
  let iconIndex = 0
  let killGap = 0
  const killIcon = SpriteHolder.get('WindowButtonClose.png')
  const maximizeIcon = SpriteHolder.get('WindowButtonMaximize.png')
  const minimizeIcon = SpriteHolder.get('WindowButtonMinimize.png')
  if (!killIcon || !maximizeIcon || !minimizeIcon) return <>{null}</>

  if (onKill) {
    icons.push(
      <Sprite
        key="kill"
        anchor={[1, 0.5]}
        texture={killIcon}
        width={getFrameIconSize() * iconAspect}
        height={getFrameIconSize()}
        position={[-iconIndex * getFrameIconSize() * iconAspect, 0]}
        interactive
        click={onKill}
      />
    )
    iconIndex++
    killGap = -2 * scaling
  }
  if (onMaximize) {
    icons.push(
      <Sprite
        key="maximize"
        anchor={[1, 0.5]}
        texture={maximizeIcon}
        width={getFrameIconSize() * iconAspect}
        height={getFrameIconSize()}
        position={[-iconIndex * getFrameIconSize() * iconAspect + killGap, 0]}
        interactive
        click={onMaximize}
      />
    )
    iconIndex++
  }
  if (onMinimize) {
    icons.push(
      <Sprite
        key="minimize"
        anchor={[1, 0.5]}
        texture={minimizeIcon}
        width={getFrameIconSize() * iconAspect}
        height={getFrameIconSize()}
        position={[-iconIndex * getFrameIconSize() * iconAspect + killGap, 0]}
        interactive
        click={onMinimize}
      />
    )
    iconIndex++
  }
  return <>{icons}</>
}
