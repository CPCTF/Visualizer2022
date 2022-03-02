<footer style={`--footer-height: ${footerHeight}px`}>
  <div class="left-menus">
    <div class="start">
      <button class="start-button">スタート</button>
    </div>
    <ul>
      {#each windowEntries as entry (entry[0])}
        <li>
          <button on:click={tabHandler(entry[0])} style={`border-style: ${entry[1].visible ? 'inset' : 'outset'}`}>
            {entry[1].title}
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="right-info">
    {time}
  </div>
</footer>

<script type="ts">
import { onDestroy } from "svelte";
import { footerHeight } from "../globals";

import { WindowSystem, type WindowInfo } from "../stores/WindowSystem";

let windows = {} as Record<string, WindowInfo>
let windowEntries = [] as [string, WindowInfo][]
let windowIndices = [] as string[]
let focused = ''

WindowSystem.windows.subscribe(value => {
  windows = value
  windowEntries = Object.entries(windows)
    const visibles = windowIndices.filter(id => windows[id]?.visible)
    focused = visibles[visibles.length - 1] || ''
})
WindowSystem.windowIndices.subscribe(value => {
  windowIndices = value
    const visibles = windowIndices.filter(id => windows[id]?.visible)
    focused = visibles[visibles.length - 1] || ''
})

const tabHandler = (id: string) => () => {
  const window = windows[id]
  if(!window) return
  if(focused === id) {
    WindowSystem.minimize(id)
  } else {
    WindowSystem.focus(id)
  }
}

let time = ''

const id = setInterval(() => {
  const now = new Date()
  time = `${now.getHours()}:${('00' + now.getMinutes()).slice(-2)}`
})

onDestroy(() => {
  clearInterval(id)
})

</script>

<style type="scss">
footer {
  position: absolute;
  top: calc(100vh - var(--footer-height));
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: var(--footer-height);
  background: #3b77bc;

  .left-menus {
    display: flex;
    justify-content: space-around;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding-inline-start: 0;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 100%;

        button {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 90%;
          height: 60%;
          overflow: hidden;
          font-size: 18px;
          text-overflow: ellipsis;
          white-space: nowrap;
          background: #35f;
          border: 2px #35f;
        }
      }
    }

    .start {
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100%;
        color: white;
        background: green;
      }
    }
  }

  .right-info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 4px;
    color: white;
  }
}
</style>