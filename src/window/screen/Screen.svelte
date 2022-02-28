{#each windowIndices as id}
  <Frame windowInfo={windows[id]} id={id} />
{/each}

<script>
  import Frame from '../screen/Frame.svelte'
  import { WindowSystem } from '../stores/WindowSystem'
  let windowIndices = []
  let windows = {}

  WindowSystem.windowIndices.subscribe(value => {
    windowIndices = value
  })
  WindowSystem.windows.subscribe(value => {
    windows = value
  })
</script>