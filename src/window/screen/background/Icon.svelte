<button class="icon" on:click={clickHandler} style={`
position: absolute;
top: ${y}px;
left: ${x}px;
`}>
  <img src={icon.src} alt={icon.title} />
  <div>{icon.title}</div>
</button>

<script lang="ts">
import { footerHeight } from "../../globals";

import type { IconInfo } from "../../stores/Icons";

import { WindowSystem } from "../../stores/WindowSystem"
import { frames } from '../frames'

export let icon: IconInfo
export let index: number

const height = 64
const width = 64
const maxColumn = Math.floor((window.innerHeight - footerHeight) / height)
const x = width * Math.floor(index / maxColumn)
const y = height * (index % maxColumn)

let windowIndices: string[] = []
WindowSystem.windowIndices.subscribe(value => {
  windowIndices = value
})

const clickHandler = () => {
  if(windowIndices.includes(icon.id)) {
    WindowSystem.focus(icon.id)
    return;
  };
  const window = frames[icon.id]
  if (window)  WindowSystem.updateWindow(icon.id, window)
}
</script>

<style lang="scss">
.icon {
  width: 64px;
  height: 64px;
  padding: 4px;

  img {
    width: 56px;
    height: 44px;
    object-fit: contain;
  }
  div {
    font-size: 12px;
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
