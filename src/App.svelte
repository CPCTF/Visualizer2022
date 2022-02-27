<script lang="ts">
  let num = 0

  let logger = (script: string) => {
    console.log(script)
  }
  setInterval(() => {
    num += 1
    logger(String(num));
  }, 10)
</script>

<div id="canvas-wrapper">
  <canvas id="main-canvas"></canvas>
  {num}
</div>


<style>
  #canvas-wrapper {
    width: 100%;
    height: 100%;
    background: red;
  }
</style>