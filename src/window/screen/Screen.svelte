{#each windowIndices as id, i (id)}
  <Frame windowInfo={windows[id] || dummyWindow} id={id} zIndex={i} focus={focused === id} />
{/each}

<script lang="ts">
  import Frame from '../screen/Frame.svelte'
  import { WindowSystem, type WindowInfo } from '../stores/WindowSystem'
import { dummyWindow } from './frames';
  let windowIndices = [] as string[]
  let focused = ''
  let windows = {} as Record<string, WindowInfo>

  WindowSystem.windowIndices.subscribe(value => {
    windowIndices = value
    const visibles = windowIndices.filter(id => windows[id]?.visible)
    focused = visibles[visibles.length - 1] || ''
  })
  WindowSystem.windows.subscribe(value => {
    windows = value
    const visibles = windowIndices.filter(id => windows[id]?.visible)
    focused = visibles[visibles.length - 1] || ''
  })
</script>