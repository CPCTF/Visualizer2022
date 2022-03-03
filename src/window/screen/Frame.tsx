import { Container, Sprite, Text } from '@inlet/react-pixi'
import { useContext, useEffect, useRef, useState, VFC } from 'react'
import { windowHeaderHeight } from '../globals'
import type { WindowInfo } from '../stores/WindowSystem'
import { TextStyle } from 'pixi.js'
import bgImgSrc from './background/xp.jpg'
import { MouseEventHandlerGenerator } from './mouseevent'
import { WindowSettingContext } from '../GlobalSetting'
import type { InteractionEvent } from 'pixi.js'
interface FrameProps {
  id: string
  windowInfo: WindowInfo
  focus: boolean
}

export const Frame: VFC<FrameProps> = ({ id, windowInfo }) => {
  const { title, rect, visible, fullscreen, Component } = windowInfo

  const { windowSettings } = useContext(WindowSettingContext)

  const windowInfoRef = useRef<WindowInfo | null>(windowInfo)

  useEffect(() => {
    windowInfoRef.current = windowInfo
  }, [windowInfo])

  const [handler, setHandler] = useState<{
    mouseDownHandler:
      | ((_windowInfo: WindowInfo) => (_e: InteractionEvent) => void)
      | null
  }>({ mouseDownHandler: null })

  useEffect(() => {
    const { mouseDownHandler, mouseMoveHandler, mouseUpHandler } =
      MouseEventHandlerGenerator(id, windowSettings)
    setHandler({ mouseDownHandler })
    const mouseMoveHandlerWrapper = (e: MouseEvent) => {
      // document.body.style.cursor = cursorGetter()
      mouseMoveHandler(windowInfoRef.current || windowInfo)(e)
    }
    const mouseUpHandlerWrapper = () => {
      mouseUpHandler()()
    }
    window.addEventListener('mousemove', mouseMoveHandlerWrapper)
    window.addEventListener('mouseup', mouseUpHandlerWrapper)
    console.log('rebuild')
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandlerWrapper)
      window.removeEventListener('mouseup', mouseUpHandlerWrapper)
    }
  }, [])

  return (
    <Container
      position={
        !visible ? [rect.x, -99999] : fullscreen ? [0, 0] : [rect.x, rect.y]
      }
      interactive
      mousedown={
        handler.mouseDownHandler
          ? handler.mouseDownHandler(windowInfo)
          : () => ''
      }
    >
      <Sprite image={bgImgSrc} width={rect.width} height={rect.height} />
      <Container position={[0, 0]}>
        <Text
          text={title}
          anchor={[0, 0.5]}
          position={[0, windowHeaderHeight / 2]}
          style={
            new TextStyle({
              align: 'center',
              fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: windowHeaderHeight * 0.5,
              fill: ['#ffffff', '#00ff99'], // gradient
              stroke: '#01d27e',
              strokeThickness: 5,
              letterSpacing: 20,
              dropShadow: true,
              dropShadowColor: '#ccced2',
              dropShadowBlur: 4,
              dropShadowAngle: Math.PI / 6,
              dropShadowDistance: 6,
              wordWrap: true,
              wordWrapWidth: 440
            })
          }
        />
        {/* <Container position={[rect.width, windowHeaderHeight / 2]}>
        </Container> */}
      </Container>

      <Container position={[0, windowHeaderHeight]}>
        {Component ? (
          <Component
            width={rect.width}
            height={rect.height - windowHeaderHeight}
          />
        ) : (
          <Container />
        )}
      </Container>
    </Container>
  )
}
