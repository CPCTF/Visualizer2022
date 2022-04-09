import { windowHeaderHeight } from '#/window/globals'
import type { ReactNode, VFC } from 'react'
import { Sprite } from '@inlet/react-pixi'
import closeSrc from './close.png'
import fullscreenSrc from './fullscreen.png'
import minimizeSrc from './minimize.png'

export const FrameIcons: VFC<{
  onKill?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
}> = ({ onKill, onMinimize, onMaximize }) => {
  const icons: ReactNode[] = []
  let iconIndex = 0
  if (onKill) {
    icons.push(
      <Sprite
        key="kill"
        anchor={[1, 0.5]}
        image={closeSrc}
        width={windowHeaderHeight}
        height={windowHeaderHeight}
        position={[-iconIndex * windowHeaderHeight, 0]}
        interactive
        click={onKill}
      />
    )
    iconIndex++
  }
  if (onMaximize) {
    icons.push(
      <Sprite
        key="maximize"
        anchor={[1, 0.5]}
        image={fullscreenSrc}
        width={windowHeaderHeight}
        height={windowHeaderHeight}
        position={[-iconIndex * windowHeaderHeight, 0]}
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
        image={minimizeSrc}
        width={windowHeaderHeight}
        height={windowHeaderHeight}
        position={[-iconIndex * windowHeaderHeight, 0]}
        interactive
        click={onMinimize}
      />
    )
    iconIndex++
  }
  return <>{icons}</>
}
