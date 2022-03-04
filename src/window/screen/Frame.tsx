import { Container, Sprite, Text } from '@inlet/react-pixi'
import { useContext, useEffect, useRef, useState, VFC } from 'react'
import { footerHeight, windowHeaderHeight } from '../globals'
import type { WindowInfo } from '../stores/WindowSystem'
import { TextStyle } from 'pixi.js'
import bgImgSrc from './background/xp.jpg'
import { MouseEventHandlerGenerator } from './mouseevent'
import { WindowSettingContext } from '../GlobalSetting'
import type { InteractionEvent } from 'pixi.js'

import closeSrc from './close.png'
import fullscreenSrc from './fullscreen.png'
import minimizeSrc from './minimize.png'
import barSrc from './bar.png'
import bgSrc from './bg.png'

interface FrameProps {
  id: string
  windowInfo: WindowInfo
  focus: boolean
}

export const Frame: VFC<FrameProps> = ({ id, windowInfo }) => {
  const { width, height } = useContext(WindowSettingContext)
  const { title, visible, fullscreen, Component } = windowInfo

  const rect = !fullscreen
    ? windowInfo.rect
    : {
        x: 0,
        y: 0,
        width,
        height: height - footerHeight
      }

  const { windowSettings } = useContext(WindowSettingContext)

  const windowInfoRef = useRef<WindowInfo | null>(windowInfo)

  const fullScreenHandler = () => {
    windowSettings.update(id, {
      ...windowInfo,
      fullscreen: !windowInfo.fullscreen
    })
  }
  const closeHandler = () => {
    windowSettings.minimize(id)
  }
  const killHandler = () => {
    windowSettings.kill(id)
  }

  useEffect(() => {
    windowInfoRef.current = windowInfo
  }, [windowInfo])

  const [handler, setHandler] = useState<{
    mouseDownHandler:
      | ((_windowInfo: WindowInfo) => (_e: InteractionEvent) => void)
      | null
    cursorMouseMoveHandler:
      | ((_windowInfo: WindowInfo) => (_e: InteractionEvent) => void)
      | null
  }>({ mouseDownHandler: null, cursorMouseMoveHandler: null })

  useEffect(() => {
    const { mouseDownHandler, mouseMoveHandler, mouseUpHandler, cursorMouseMoveHandler } =
      MouseEventHandlerGenerator(id, windowSettings)
    setHandler({ mouseDownHandler, cursorMouseMoveHandler })
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
      position={!visible ? [rect.x, -99999] : [rect.x, rect.y]}
      interactive
      mousedown={
        handler.mouseDownHandler
          ? handler.mouseDownHandler(windowInfo)
          : () => ''
      }
      mousemove={
        handler.cursorMouseMoveHandler
          ? handler.cursorMouseMoveHandler(windowInfo)
          : () => ''
      }
    >
      <Sprite image={bgImgSrc} width={rect.width} height={rect.height} />
      <Container position={[0, 0]}>
        <Sprite
          anchor={[0, 0]}
          image={barSrc}
          width={rect.width}
          height={windowHeaderHeight}
          position={[0, 0]}
        />
        <Text
          text={title}
          anchor={[0, 0.5]}
          position={[0, windowHeaderHeight / 2]}
          style={
            new TextStyle({
              align: 'center',
              fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: windowHeaderHeight * 0.5,
              fill: '#000',
              letterSpacing: 20
            })
          }
        />
        <Container position={[rect.width, windowHeaderHeight / 2]}>
          <Sprite
            anchor={[1, 0.5]}
            image={minimizeSrc}
            width={windowHeaderHeight}
            height={windowHeaderHeight}
            position={[-windowHeaderHeight * 2, 0]}
            interactive
            click={closeHandler}
          />
          <Sprite
            anchor={[1, 0.5]}
            image={fullscreenSrc}
            width={windowHeaderHeight}
            height={windowHeaderHeight}
            position={[-windowHeaderHeight, 0]}
            interactive
            click={fullScreenHandler}
          />
          <Sprite
            anchor={[1, 0.5]}
            image={closeSrc}
            width={windowHeaderHeight}
            height={windowHeaderHeight}
            position={[0, 0]}
            interactive
            click={killHandler}
          />
        </Container>
      </Container>

      <Container position={[0, windowHeaderHeight]}>
        <Sprite
          anchor={[0, 0]}
          image={bgSrc}
          width={rect.width}
          height={rect.height - windowHeaderHeight}
          position={[0, 0]}
        />
        {Component ? (
          <Component
            x={rect.x}
            y={rect.y + windowHeaderHeight}
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
