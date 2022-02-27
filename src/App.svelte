<script lang="ts">
  let num: number = 0

  setInterval(() => {
    num += 1
  }, 100)
</script>

<div id="canvas-wrapper">
  <canvas id="main-canvas"></canvas>
</div>

{num}

<style>
  #canvas-wrapper {
    width: 100%;
    height: 100%;
  }
</style>