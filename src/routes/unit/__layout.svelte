<script context="module" lang="ts">
  import Rack from '../../components/Rack.svelte'

  // export const router = browser;
  export const prerender = true;
</script>

<div>
  <h3>Menu</h3>

  <div class="flex">
    <Rack />

    <slot />
  </div>
</div>

<style lang="scss">
  .flex {
    display: flex;
  }
</style>
