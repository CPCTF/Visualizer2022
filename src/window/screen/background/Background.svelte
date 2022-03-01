<div>
  {#each icons as icon, i}
    <Icon icon={icon} index={i} />
  {/each}
</div>

<script lang="ts">
import Icon from  './Icon.svelte'
import { icons } from "../../stores/Icons";

</script>
