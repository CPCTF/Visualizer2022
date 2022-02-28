<div>
  {time}
</div>

<script>
import { onDestroy } from "svelte";


  let time = ''
  const interval = setInterval(() => {
    time = (new Date()).toString()
  }, 100)
  onDestroy(() => {
    clearInterval(interval)
  })
</script>