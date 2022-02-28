<div class="resize" bind:clientHeight={clientHeight} bind:clientWidth={clientWidth}>
  <div id="canvas-wrapper" style={`
    width: ${clientWidth}px;
    height: ${clientHeight}PX;
  `}>
    <canvas id="main-canvas"></canvas>
  </div>
</div>

<script lang="ts">
  let clientHeight;
  let clientWidth;
</script>

<style lang="scss">
  .resize {
    width: 100%;
    height: 100%;
    #canvas-wrapper {
      #main-canvas {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
