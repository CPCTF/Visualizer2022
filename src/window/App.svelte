<script lang="ts">
import Footer from "./footer/Footer.svelte";
</script>

<div id="canvas-wrapper">
  <canvas id="main-canvas"></canvas>
</div>

<Footer />


<style lang="scss">
  #canvas-wrapper {
    border: 1px solid;
    width: 500px;
    height: 500px;
    #main-canvas {
      width: 100%;
      height: 100%;
    }
  }
</style>