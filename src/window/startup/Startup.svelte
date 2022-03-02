{#if starting}
<main>
  ''
</main>
{/if}

<script lang="ts">
let starting = true;

setTimeout(() => {
  starting = false
}, 5000)
</script>

<style lang="scss">
main {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-image: url("/assets/startup.png");
  background-size: cover;
  background-position: center center;
}
</style>