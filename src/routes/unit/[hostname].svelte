<script lang="ts" context="module">
  import type { IRack } from '$interface/IRack';
  import type { IRaiderIO } from 'src/interface/IRaiderIO';
  import * as rackData from '$lib/rack/data.json';

  const rackunits: IRack[] = rackData.default;
  function getUnitFromHostname(hostname) {
    return rackunits.find(unit => unit.hostname === hostname)
  }

  let unit = undefined;

  export async function load({ page: { params }, fetch }) {
    const { hostname } = params;

    updated = unit?.hostname !== hostname
    unit = getUnitFromHostname(hostname)

    return {
      props: {
        unit,
        updated
      }
    };
  }
</script>

<div>
  {#if updated || unit}
    <h2>{ unit.hostname }</h2>

    {#each JSON.stringify(unit).split(",") as segment}
      <p>{ segment }</p>
    {/each}

    <div>
      <h2>Actions</h2>
  
      <a href={`ssh://${unit?.proxmox ? 'root' : 'kevin'}@${unit.hostname}.schleppe`}>
        <button>Open ssh terminal</button>
      </a>

      {#if unit?.proxmox == true}
        <a href={`https://${unit.hostname}.schleppe:8006`} target="_blank">
          <button>Open proxmox</button>
        </a>

      {:else if unit?.admin_address}
        <a href={unit.admin_address} target="_blank">
          <button>Open admin</button>
        </a>
      {/if}
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../../sass/button.scss';

  a {
    color: black;
  }

  h2 {
    display: flex;
    align-items: center;
  }
</style>
