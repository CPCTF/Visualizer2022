<script lang="ts">
import Footer from "./footer/Footer.svelte"
import Screen from "./screen/Screen.svelte"
import { frames } from './screen/frames'
import { WindowSystem } from "./stores/WindowSystem"
import Startup from "./startup/Startup.svelte"

if (frames['visualizer']) WindowSystem.updateWindow('visualizer', frames['visualizer'])
</script>

<main>
  <Screen />
</main>
<Footer />
<Startup />

<style lang="scss">
  $footer-height: 54px;
  main {
    width: 100%;
    height: calc(100% - $footer-height);
    padding: 0;
    margin: 0;
    background-image: url("/public/assets/xp.jpg");
    background-size: cover;
  }
</style>

