<script context="module" lang="ts">
  import type { IRack } from '$interface/IRack';
  import Rackunit from './Rackunit.svelte'
  import * as rackData from '$lib/rack/data.json';

  let rackunits: IRack[] = rackData.default;
</script>

<div class="cage">
  {#each rackunits as unit}
    <Rackunit {unit} />
  {/each}
</div>


<style lang="scss">
.cage {
  width: 100%;
  max-width: 500px;
  height: 100%;
  border: 2px solid black;

  border-radius: 0.5rem;

  margin-left: 2rem;
  margin-right: 3rem;
}
</style>