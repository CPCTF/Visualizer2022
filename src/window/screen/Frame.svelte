<div class="frame" style={`
top: ${windowInfo.visible ? windowInfo.rect.y : window.innerHeight}px;
left: ${windowInfo.rect.x}px;
width: ${windowInfo.rect.width}px;
height: ${windowInfo.rect.height}px;
cursor: ${cursor};
z-index: ${zIndex};
border-color: ${focus ? '#3B77BC' : '#3B77BC'};
`}
  on:mousedown={(e) => mouseDownHandler(windowInfo)(e)}
>
  <div class="header"
  >
    <div class="title">
      <h2>{windowInfo.title}</h2>
    </div>
    <div class="controls">
      <button on:click|stopPropagation={closeHandler}>_</button>
      <button on:click|stopPropagation={fullScreenHandler}>□</button>
    </div>
  </div>
  <section class="content">
    <Component />
  </section>
</div>

<script type="ts">
import { onDestroy } from "svelte";
import { WindowSystem, type WindowInfo } from "../stores/WindowSystem";

import { MouseEventHandlerGenerator } from "./mouseevent";

export let id: string
export let windowInfo: WindowInfo
export let zIndex: number
export let focus: boolean
let cursor  = 'default'

let { Component } = windowInfo

const footerHeight = 54;

const fullScreenHandler = () => {
  WindowSystem.updateWindow(id, {
    ...windowInfo,
    rect: {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight - footerHeight
    }
  })
}
const closeHandler = () => {
  WindowSystem.updateWindow(id, {
    ...windowInfo,
    visible: false
  })
}

// mouse events
const {
  mouseDownHandler,
  mouseMoveHandler,
  mouseUpHandler,
  cursorGetter
} = MouseEventHandlerGenerator(id)

const mouseMoveHandlerWrapper = (e: MouseEvent) => {
  cursor = cursorGetter()
  mouseMoveHandler(windowInfo)(e)
}
const mouseUpHandlerWrapper = () => {
  mouseUpHandler()()
}

window.addEventListener('mousemove', mouseMoveHandlerWrapper)
window.addEventListener('mouseup', mouseUpHandlerWrapper)
onDestroy(() => {
  window.removeEventListener('mousemove', mouseMoveHandlerWrapper)
  window.removeEventListener('mouseup', mouseUpHandlerWrapper)
})
</script>

<style type="scss">
$header-height: 32px;

.frame {
  position: absolute;
  background: white;
  border: 7px solid;
  border-radius: 10px;

  .header {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: $header-height;
    background-color: #3b77bc;
    outline: 1px #3b77bc solid;

    h2 {
      margin: 0;
      font-size: 28px;
      color: white;
    }
  }

  .content {
    position: absolute;
    top: $header-height;
    left: 0;
    width: 100%;
    height: calc(100% - $header-height);
    overflow: hidden;
  }
}
</style>