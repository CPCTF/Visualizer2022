<footer>
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
</footer>

<script type="ts">
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

</script>

<style type="scss">
$footer-height: 54px;

footer {
  position: absolute;
  top: calc(100vh - $footer-height);
  left: 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: $footer-height;
  background: #3b77bc;

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
        justify-content: center;
        width: 90%;
        height: 60%;
        font-size: 18px;
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
</style>