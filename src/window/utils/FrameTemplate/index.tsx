import type { ReactNode, VFC } from 'react'
import barSrc from './bar.png'
import barInactiveSrc from './bar-inactive.png'
import { FrameBackground } from '../MonoColorBG'
import { TextStyle } from 'pixi.js'
import { Container, Sprite, Text } from '@inlet/react-pixi'
import { windowEdge, windowHeaderEdge, windowHeaderHeight } from '../../globals'
import { FrameEdge } from './FrameEdge'
import { FrameIcons } from './frameIcons'

interface FrameTemplate {
  width: number
  height: number
  title: string
  isActive?: boolean
  onMinimize?: () => void
  onMaximize?: () => void
  onKill?: () => void
  children: ReactNode
}

export const getFrameWidth = (width: number) => {
  return width - windowEdge * 2
}
export const getFrameHeight = (height: number) => {
  return height - windowHeaderHeight - windowEdge
}

export const FrameTemplate: VFC<FrameTemplate> = ({
  width,
  height,
  title,
  isActive = true,
  onMinimize,
  onMaximize,
  onKill,
  children
}) => {
  return (
    <>
      <Container position={[0, 0]}>
        <FrameEdge width={width} height={height} />
        <Sprite
          image={isActive ? barSrc : barInactiveSrc}
          width={width - windowEdge * 2}
          height={windowHeaderHeight - windowHeaderEdge * 2}
          position={[windowEdge, windowHeaderEdge]}
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
          <FrameIcons
            onKill={onKill}
            onMaximize={onMaximize}
            onMinimize={onMinimize}
          />
        </Container>
      </Container>

      <Container position={[windowEdge, windowHeaderHeight]}>
        {/* for delay load */}
        {!children ? null : (
          <FrameBackground
            width={width - windowEdge * 2}
            height={height - windowHeaderHeight - windowEdge}
          />
        )}
        {children}
      </Container>
    </>
  )
}
