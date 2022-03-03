<script lang="ts">
import Footer from "./footer/Footer.svelte"
import Screen from "./screen/Screen.svelte"
import Startup from "./startup/Startup.svelte"
import screenBgSrc from './screen/background/xp.jpg'
import { footerHeight } from "./globals";
</script>

<main style={`
--screen-bg: url(${screenBgSrc});
--footer-height: ${footerHeight}px;
`}>
  <Screen />
</main>
<Footer />
<Startup />

<style lang="scss">
  main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - var(--footer-height));
    padding: 0;
    margin: 0;
    background-image: var(--screen-bg);
    background-size: cover;
  }
</style>

