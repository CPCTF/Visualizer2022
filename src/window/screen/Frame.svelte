<div class="frame" style={`
top: ${windowInfo.rect.x}px;
left: ${windowInfo.rect.y}px;
width: ${windowInfo.rect.width}px;
height: ${windowInfo.rect.height}px;
`}>
  <div class="header">
    <h1>{windowInfo.title}</h1>
  </div>
  <section class="content">

  </section>
</div>

<script type="ts">
import { WindowSystem, type WindowInfo } from "../stores/WindowSystem";

let id: string
let windowInfo: WindowInfo


</script>

<style type="scss">
$header-height: 32px;

.frame {
  border: 1px solid;
  border-radius: 5px;

  .header {
    width: 100%;
    height: $header-height;
  }

  .content {
    width: 100%;
    height: calc(100% - $header-height);
  }
}
</style>