import { type WindowInfo, WindowSystem } from '../stores/WindowSystem'

export const MouseEventHandlerGenerator = (id: string) => {
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
  const mouseDownHandler = (windowInfo: WindowInfo) => (e: MouseEvent) => {
    basePos.x = e.clientX
    basePos.y = e.clientY
    rect = windowInfo.rect
    WindowSystem.focus(id)
    if (
      scaleMode[0] === 0 &&
      scaleMode[1] === 0 &&
      e.clientY - rect.y > headerHeight
    )
      return
    // move and resize event
    e.preventDefault()
    downScaleMode[0] = scaleMode[0]
    downScaleMode[1] = scaleMode[1]
    mode = scaleMode[0] === 0 && scaleMode[1] === 0 ? 'move' : 'scale'
  }
  const mouseMoveHandler = (windowInfo: WindowInfo) => (e: MouseEvent) => {
    // set cursor and scale direction
    const nowRect = windowInfo.rect
    if (e.clientX - nowRect.x < scaleEdge) {
      scaleMode[0] = -1
    } else if (nowRect.x + nowRect.width - e.clientX < scaleEdge) {
      scaleMode[0] = 1
    } else {
      scaleMode[0] = 0
    }
    if (e.clientY - nowRect.y < scaleEdge) {
      scaleMode[1] = -1
    } else if (nowRect.y + nowRect.height - e.clientY < scaleEdge) {
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
    } else if (e.clientY - nowRect.y < headerHeight) {
      cursor = 'grab'
    } else {
      cursor = 'default'
    }

    // resize and move event
    if (mode === 'none') return

    if (mode === 'move') {
      cursor = 'grabbing'
      WindowSystem.updateWindow(id, {
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
      if (downScaleMode[0] === 1) {
        newRect.width = rect.width - basePos.x + e.clientX
      } else if (downScaleMode[0] === -1) {
        newRect.width = basePos.x + rect.width - e.clientX
        newRect.x = rect.x - basePos.x + e.clientX
      }
      if (downScaleMode[1] === 1) {
        newRect.height = rect.height - basePos.y + e.clientY
      } else if (downScaleMode[1] === -1) {
        newRect.height = basePos.y + rect.height - e.clientY
        newRect.y = rect.y - basePos.y + e.clientY
      }
      WindowSystem.updateWindow(id, {
        ...windowInfo,
        rect: newRect
      })
    }
  }
  const mouseUpHandler = () => () => {
    mode = 'none'
  }

  return {
    mouseDownHandler,
    mouseMoveHandler,
    mouseUpHandler,
    cursorGetter: () => cursor
  }
}
