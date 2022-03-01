<script lang="ts">
import Footer from "./footer/Footer.svelte"
import Screen from "./screen/Screen.svelte"
import { frames } from './screen/frames'
import { WindowSystem } from "./stores/WindowSystem"

if (frames['visualizer']) WindowSystem.updateWindow('visualizer', frames['visualizer'])
if (frames['clock']) WindowSystem.updateWindow('clock', frames['clock'])
</script>
<main>
  <Screen />
  <Footer />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-image: url("/public/assets/xp.jpg");
    background-size: cover;
  }
</style>

