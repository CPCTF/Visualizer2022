import type { ReactNode, VFC } from 'react'
import { Sprite } from '@inlet/react-pixi'
import headerIcon from './header-icon.png'
import { scaling, windowHeaderEdge, windowHeaderHeight } from '#/window/globals'
import { BaseTexture, Rectangle, Texture } from 'pixi.js'

export const getFrameIconSize = () =>
  (windowHeaderHeight - windowHeaderEdge * 2) * 0.9

const headerIconTexture = new BaseTexture(headerIcon)
const iconTextures = {
  kill: new Texture(headerIconTexture, new Rectangle(32, 0, 16, 14)),
  maximize: new Texture(headerIconTexture, new Rectangle(16, 0, 16, 14)),
  minimize: new Texture(headerIconTexture, new Rectangle(0, 0, 16, 14))
}
const iconAspect = 16 / 14

export const FrameIcons: VFC<{
  onKill?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
}> = ({ onKill, onMinimize, onMaximize }) => {
  const icons: ReactNode[] = []
  let iconIndex = 0
  let killGap = 0
  if (onKill) {
    icons.push(
      <Sprite
        key="kill"
        anchor={[1, 0.5]}
        texture={iconTextures.kill}
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
        texture={iconTextures.maximize}
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
        texture={iconTextures.minimize}
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
