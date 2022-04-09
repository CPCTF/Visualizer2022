import { Container, useTick } from '@inlet/react-pixi'
import { useContext, useEffect, useRef, useState, VFC } from 'react'
import { footerHeight, windowHeaderHeight } from '../globals'
import type { WindowInfo } from '../stores/WindowSystem'
import { MouseEventHandlerGenerator } from './mouseevent'
import { WindowSettingContext } from '../GlobalSetting'
import type { InteractionEvent } from 'pixi.js'
import { getCursorIcon, updateCursorIcon } from '../stores/cursorIcon'
import {
  FrameTemplate,
  getFrameHeight,
  getFrameWidth
} from '../utils/FrameTemplate'

interface FrameProps {
  id: string
  windowInfo: WindowInfo
  focus: boolean
}

export const Frame: VFC<FrameProps> = ({ id, windowInfo, focus }) => {
  const { width, height } = useContext(WindowSettingContext)
  const { title, visible, fullscreen, Component } = windowInfo
  const [contentVisible, setContextVisible] = useState(false)

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
    mouseOverHandler: (() => void) | null
    mouseOutHandler: (() => void) | null
    getCursor: (() => string) | null
  }>({
    mouseDownHandler: null,
    cursorMouseMoveHandler: null,
    mouseOverHandler: null,
    mouseOutHandler: null,
    getCursor: null
  })

  useEffect(() => {
    // delay content load
    const delayContentLoadTimeout = setTimeout(() => {
      setContextVisible(true)
    }, 1500)

    // register mouse events
    const {
      mouseDownHandler,
      mouseMoveHandler,
      mouseUpHandler,
      cursorMouseMoveHandler,
      mouseOutHandler,
      mouseOverHandler,
      getCursor
    } = MouseEventHandlerGenerator(id, windowSettings, width, height)
    setHandler({
      mouseDownHandler,
      cursorMouseMoveHandler,
      mouseOverHandler,
      mouseOutHandler,
      getCursor
    })
    const mouseMoveHandlerWrapper = (e: MouseEvent) => {
      // document.body.style.cursor = cursorGetter()
      mouseMoveHandler(windowInfoRef.current || windowInfo)(e)
    }
    const mouseUpHandlerWrapper = () => {
      mouseUpHandler()()
    }

    const pixicanvas = document.getElementById('pixicanvas')
    if (!pixicanvas) return
    pixicanvas.addEventListener('mousemove', mouseMoveHandlerWrapper)
    pixicanvas.addEventListener('mouseup', mouseUpHandlerWrapper)
    return () => {
      clearTimeout(delayContentLoadTimeout)
      pixicanvas.removeEventListener('mousemove', mouseMoveHandlerWrapper)
      pixicanvas.removeEventListener('mouseup', mouseUpHandlerWrapper)
    }
  }, [])

  useTick(() => {
    if (handler.getCursor && handler.getCursor() && !getCursorIcon()) {
      updateCursorIcon(handler.getCursor())
    }
  })

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
      mouseover={handler.mouseOverHandler ? handler.mouseOverHandler : () => ''}
      mouseout={handler.mouseOutHandler ? handler.mouseOutHandler : () => ''}
    >
      <FrameTemplate
        width={rect.width}
        height={rect.height}
        title={title}
        isActive={focus}
        onMinimize={closeHandler}
        onMaximize={fullScreenHandler}
        onKill={id === 'visualizer' ? undefined : killHandler}
      >
        {!contentVisible ? null : Component ? (
          <Component
            x={rect.x}
            y={rect.y + windowHeaderHeight}
            width={getFrameWidth(rect.width)}
            height={getFrameHeight(rect.height)}
          />
        ) : (
          <Container />
        )}
      </FrameTemplate>
    </Container>
  )
}
