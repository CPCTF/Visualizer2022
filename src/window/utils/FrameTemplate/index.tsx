import type { ReactNode, VFC } from 'react'

import closeSrc from './close.png'
import fullscreenSrc from './fullscreen.png'
import minimizeSrc from './minimize.png'
import barSrc from './bar.png'
import { FrameBackground } from '../MonoColorBG'
import { BaseTexture, Rectangle, TextStyle, Texture } from 'pixi.js'
import { Container, Sprite, Text } from '@inlet/react-pixi'
import { windowEdge, windowHeaderHeight } from '../../globals'
import frameEdgeSrc from './frame-edge.png'

const frameEdgeSprites = new BaseTexture(frameEdgeSrc)
const frameEdge = {
  topLeft: new Texture(frameEdgeSprites, new Rectangle(0, 0, 6, 26)),
  top: new Texture(frameEdgeSprites, new Rectangle(6, 0, 3, 26)),
  topRight: new Texture(frameEdgeSprites, new Rectangle(9, 0, 6, 26)),
  right: new Texture(frameEdgeSprites, new Rectangle(9, 26, 6, 3)),
  bottomRight: new Texture(frameEdgeSprites, new Rectangle(9, 29, 6, 6)),
  bottom: new Texture(frameEdgeSprites, new Rectangle(6, 29, 3, 6)),
  bottomLeft: new Texture(frameEdgeSprites, new Rectangle(0, 0, 6, 6)),
  left: new Texture(frameEdgeSprites, new Rectangle(0, 26, 6, 3))
}

interface FrameTemplate {
  width: number
  height: number
  title: string
  onMinimize?: () => void
  onMaximize?: () => void
  onKill?: () => void
  children: ReactNode
}

export const getFrameWidth = (width: number) => {
  return width - windowEdge * 2
}
export const getFrameHeight = (height: number) => {
  return height - windowHeaderHeight - windowEdge * 2
}

export const FrameTemplate: VFC<FrameTemplate> = ({
  width,
  height,
  title,
  onMinimize,
  onMaximize,
  onKill,
  children
}) => {
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
  return (
    <>
      <Container position={[0, 0]}>
        <Sprite
          anchor={[0, 0]}
          image={barSrc}
          width={width}
          height={windowHeaderHeight}
          position={[0, 0]}
        />
        <Text
          text={title}
          anchor={[0, 0.5]}
          position={[5, windowHeaderHeight / 2]}
          style={
            new TextStyle({
              align: 'center',
              fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: windowHeaderHeight * 0.5,
              fill: '#000'
            })
          }
        />
        <Container position={[width, windowHeaderHeight / 2]}>
          {icons}
        </Container>
      </Container>

      <Container position={[0, windowHeaderHeight]}>
        {/* for delay load */}
        {!children ? null : (
          <FrameBackground width={width} height={height - windowHeaderHeight} />
        )}
        {children}
      </Container>
    </>
  )
}
