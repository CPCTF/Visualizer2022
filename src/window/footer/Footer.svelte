<footer>
  <div class="start">
    <button class="start-button">スタート</button>
  </div>
  <ul>
    {#each windowEntries as entry (entry[0])}
      <li>
        <button on:click={tabHandler(entry[0])}>
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
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: $footer-height;
  background: #3b77bc;

  .start {
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      height: 100%;
    }
  }
}
</style>