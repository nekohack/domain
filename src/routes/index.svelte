<script context="module" lang="ts">
  export async function load() {
    const path = 'domains'
    const url = `${import.meta.env.VITE_MICROCMS_API_ENDPOINT}${path}`
    const res = await fetch(url, {
      headers: { 'X-MICROCMS-API-KEY': import.meta.env.VITE_MICROCMS_API_KEY },
    })
    const domains = res.json()
    return { props: { items: domains } }
  }
</script>

<script lang="ts">
  import Domain from '$lib/card/Domain.svelte'
  export let items
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <h1>
    for my own<br />managed app
  </h1>

  <h2>
    try editing <strong>microCMS</strong>
  </h2>

  {#each items.contents as item}
    <Domain {item} />
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }
</style>
