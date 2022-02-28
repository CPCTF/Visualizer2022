<script lang="ts">
  let num = 0

  let logger = (script: string) => {
    console.log(script)
  }
  setInterval(() => {
    num += 1
    logger(num)
  }, 10)
</script>

<div id="canvas-wrapper">
  <canvas id="main-canvas"></canvas>
  {num}
</div>


<style lang="scss">
  #canvas-wrapper {
    width: 500px;
    height: 500px;
    background: red;
    #main-canvas {
      width: 100%;
      height: 100%;
    }
  }
</style>