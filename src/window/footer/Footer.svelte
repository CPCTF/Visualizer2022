<footer>
  <button class="start">スタート</button>
  <ul>
    {#each windowsEntries as entry}
      <li>
        <button>
          {entry.title}
        </button>
      </li>
    {/each}
  </ul>
</footer>

<script>
import { WindowSystem } from "../stores/WindowSystem";
import { frames } from '../screen/frames'
import "../_variables.css";

let windows = WindowSystem.windows
let windowsEntries = Object.entries(windows) || []

WindowSystem.updateWindow('canvas', frames['canvas'])

</script>

<style type="scss">
$footer-height: 54px;

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footer-height;
  background: #77f;

  .start {
    width: 100px;
    height: $footer-height;
  }

  ul {
    display: flex;
    flex-direction: row;
  }
}
</style>