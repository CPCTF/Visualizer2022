<script lang="ts">
  let num = 0

  let logger = (script: string) => {
    // eslint-disable-next-line no-undef
    console.log(script)
  }
  // eslint-disable-next-line no-undef
  setInterval(() => {
    num += 1
    logger(String(num))
  }, 10)
</script>

<div id="canvas-wrapper">
  <canvas id="main-canvas"></canvas>
  {num}
</div>


<style lang="scss">
  #canvas-wrapper {
    background: red;
    width: 500px;
    height: 500px;
    #main-canvas {
      width: 100%;
      height: 100%;
    }
  }
</style>