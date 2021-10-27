<script lang="ts">
  import { onMount } from 'svelte';
  import type { IRack } from '$interface/IRack';
  import { goto, prefetchRoutes } from '$app/navigation';

  export let unit: IRack;

  function unitSelect() {
    if (window.location.href.indexOf(unit.hostname) == -1) {
      goto(`/unit/${unit.hostname}`);
    } else {
      goto('/unit')
    }
  }

  onMount(() => {
    const { element } = unit;

    if (element) {
      element.style.height = `${element.clientHeight * unit.size}px`;
    }
  })
</script>

 <div class="unit" on:click={unitSelect}>
  {#if unit?.image}
    <img src={unit.image} alt={unit?.hostname} />
  {:else}
    <div class="blank" bind:this={unit['element']}></div>
  {/if}
</div>

<style lang="scss">

  .unit {
    position: relative;
    display: grid;
    width: 108%;
    margin-left: -4%;
    background-color: randomBgr();

    &:hover:before {
      $borderWidth: 4px;

      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: -$borderWidth;
      left: -$borderWidth;
      z-index: 10;

      border: $borderWidth solid pink;
    }

    .blank {
      width: 100%;
      height: 48px;
    }

    img {
      width: 100%;
    }
  }
</style>