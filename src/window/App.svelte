<script lang="ts">
import Footer from "./footer/Footer.svelte"
import Screen from "./screen/Screen.svelte"
import { frames } from './screen/frames'
import { WindowSystem } from "./stores/WindowSystem"

if (frames['canvas']) WindowSystem.updateWindow('canvas', frames['canvas'])
if (frames['clock']) WindowSystem.updateWindow('clock', frames['clock'])
</script>

<Screen />
<Footer />

