import { footerHeight, windowHeaderHeight } from '../globals'
import type { WindowInfo } from '../stores/WindowSystem'
import type { WindowSettingProps } from '../GlobalSetting'
import type { InteractionEvent } from 'pixi.js'

export const MouseEventHandlerGenerator = (
  id: string,
  WindowSystem: WindowSettingProps['windowSettings']
) => {
  type DragMode = 'none' | 'move' | 'scale'
  const headerHeight = 32
  const scaleEdge = 8
  const scaleMode: [number, number] = [0, 0]
  const downScaleMode: [number, number] = [0, 0]
  let mode: DragMode = 'none'
  const basePos = {
    x: 0,
    y: 0
  }
  let cursor = 'pointer'
  let rect = { x: 0, y: 0, width: 0, height: 0 }
  const mouseDownHandler =
    (windowInfo: WindowInfo) => (e: InteractionEvent) => {
      basePos.x = e.data.global.x
      basePos.y = e.data.global.y
      if (windowInfo.fullscreen) {
        rect = {
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight - footerHeight
        }
      } else {
        rect = windowInfo.rect
      }
      WindowSystem.focus(id)
      if (
        scaleMode[0] === 0 &&
        scaleMode[1] === 0 &&
        basePos.y - rect.y > headerHeight
      )
        return
      // move and resize event
      downScaleMode[0] = scaleMode[0]
      downScaleMode[1] = scaleMode[1]
      mode = scaleMode[0] === 0 && scaleMode[1] === 0 ? 'move' : 'scale'
      WindowSystem.update(id, {
        ...windowInfo,
        rect,
        fullscreen: false
      })
    }
  const mouseMoveHandler = (windowInfo: WindowInfo) => (e: MouseEvent) => {
    // resize and move event
    if (mode === 'none') return

    if (mode === 'move') {
      cursor = 'grabbing'
      WindowSystem.update(id, {
        ...windowInfo,
        rect: {
          x: rect.x + e.clientX - basePos.x,
          y: rect.y + e.clientY - basePos.y,
          width: windowInfo.rect.width,
          height: windowInfo.rect.height
        }
      })
    } else {
      const newRect = { ...rect }
      const maxWidth = 200
      const maxHeight = 200
      if (downScaleMode[0] === 1) {
        newRect.width = Math.max(maxWidth, rect.width - basePos.x + e.clientX)
      } else if (downScaleMode[0] === -1) {
        newRect.width = Math.max(maxWidth, basePos.x + rect.width - e.clientX)
        newRect.x = Math.min(
          rect.x + rect.width - maxWidth,
          rect.x - basePos.x + e.clientX
        )
      }
      if (downScaleMode[1] === 1) {
        newRect.height = Math.max(
          maxHeight,
          rect.height - basePos.y + e.clientY
        )
      } else if (downScaleMode[1] === -1) {
        newRect.height = Math.max(
          maxHeight,
          basePos.y + rect.height - e.clientY
        )
        newRect.y = Math.min(
          rect.y + rect.height - maxHeight,
          rect.y - basePos.y + e.clientY
        )
      }
      newRect.width = Math.max(200, newRect.width)
      newRect.height = Math.max(windowHeaderHeight, newRect.height)
      WindowSystem.update(id, {
        ...windowInfo,
        rect: newRect
      })
    }
  }
  const mouseUpHandler = () => () => {
    mode = 'none'
  }

  const cursorMouseMoveHandler =
    (windowInfo: WindowInfo) => (e: InteractionEvent) => {
      // set cursor and scale direction
      const nowRect = windowInfo.fullscreen
        ? {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight - footerHeight
          }
        : windowInfo.rect
      if (e.data.global.x - nowRect.x < scaleEdge) {
        scaleMode[0] = -1
      } else if (nowRect.x + nowRect.width - e.data.global.x < scaleEdge) {
        scaleMode[0] = 1
      } else {
        scaleMode[0] = 0
      }
      if (e.data.global.y - nowRect.y < scaleEdge) {
        scaleMode[1] = -1
      } else if (nowRect.y + nowRect.height - e.data.global.y < scaleEdge) {
        scaleMode[1] = 1
      } else {
        scaleMode[1] = 0
      }

      if (scaleMode[0] * scaleMode[1] === 1) {
        cursor = 'nwse-resize'
      } else if (scaleMode[0] * scaleMode[1] === -1) {
        cursor = 'nesw-resize'
      } else if (scaleMode[0] !== 0) {
        cursor = 'ew-resize'
      } else if (scaleMode[1] !== 0) {
        cursor = 'ns-resize'
      } else if (e.data.global.y - nowRect.y < headerHeight) {
        cursor = 'grab'
      } else {
        cursor = 'default'
      }

      if (document.body.style.cursor === 'default')
        document.body.style.cursor = cursor
    }

  return {
    mouseDownHandler,
    mouseMoveHandler,
    mouseUpHandler,
    cursorMouseMoveHandler
  }
}
