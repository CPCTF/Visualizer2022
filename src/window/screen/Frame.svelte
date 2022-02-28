<div class="frame" style={`
top: ${windowInfo.rect.y}px;
left: ${windowInfo.rect.x}px;
width: ${windowInfo.rect.width}px;
height: ${windowInfo.rect.height}px;
cursor: ${cursor};
`}
  on:mousedown={mouseDownHandler}
>
  <div class="header"
  >
    <h1>{windowInfo.title}</h1>
  </div>
  <section class="content">
    <Component />
  </section>
</div>

<script type="ts">
import { WindowSystem, type WindowInfo } from "../stores/WindowSystem";

export let id: string
export let windowInfo: WindowInfo

let { Component } = windowInfo

type DragMode = 'none' | 'move' | 'scale'
const headerHeight = 32;
const scaleEdge = 8;
const scaleMode: [number, number] = [0, 0]
const downScaleMode: [number, number] = [0, 0]
let mode: DragMode = 'none'
let basePos = {
  x: 0, y: 0
}
let cursor = 'pointer'
let rect = windowInfo.rect
const mouseDownHandler = (e) => {
  if(scaleMode[0] === 0 && scaleMode[1] === 0 && e.clientY - rect.y > headerHeight) return;
  e.preventDefault()
  basePos.x = e.clientX
  basePos.y = e.clientY
  rect = windowInfo.rect
  downScaleMode[0] = scaleMode[0]
  downScaleMode[1] = scaleMode[1]
  mode = scaleMode[0] === 0 && scaleMode[1] === 0 ? 'move' : 'scale'
}
const mouseMoveHandler = (e) => {
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

  if(scaleMode[0] * scaleMode[1] === 1) {
    cursor = 'nwse-resize'
  } else if (scaleMode[0] * scaleMode[1] === -1) {
    cursor = 'nesw-resize'
  } else if (scaleMode[0] !== 0) {
    cursor = 'ew-resize'
  } else if (scaleMode[1] !== 0) {
    cursor = 'ns-resize'
  } else if(e.clientY - nowRect.y < headerHeight) {
    cursor = 'pointer'
  } else {
    cursor = 'default'
  }

  if (mode === 'none') return

  if (mode === 'move') {
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
    console.log('scale')
    const newRect = {...rect}
    if (downScaleMode[0] === 1) {
      newRect.width = rect.width - basePos.x + e.clientX 
    } else if(downScaleMode[0] === -1) {
      newRect.width = basePos.x + rect.width - e.clientX
      newRect.x = rect.x - basePos.x + e.clientX
    }
    if (downScaleMode[1] === 1) {
      newRect.height = rect.height - basePos.y + e.clientY 
    } else if(downScaleMode[1] === -1) {
      newRect.height = basePos.y + rect.height - e.clientY
      newRect.y = rect.y - basePos.y + e.clientY
    }
    WindowSystem.updateWindow(id, {
      ...windowInfo,
      rect: newRect
    })
  }

}
const mouseUpHandler = () => {
  mode = 'none'
}

// eslint-disable-next-line no-undef
window.addEventListener('mousemove', mouseMoveHandler)
// eslint-disable-next-line no-undef
window.addEventListener('mouseup', mouseUpHandler)
</script>

<style type="scss">
$header-height: 32px;

.frame {
  position: absolute;
  border: 1px solid;
  border-radius: 5px;

  .header {
    width: 100%;
    height: $header-height;

    h1 {
      height: 100%;
      margin: 0;
    }
  }

  .content {
    width: 100%;
    height: calc(100% - $header-height);
  }
}
</style>