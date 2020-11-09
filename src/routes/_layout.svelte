<script>
  import collections from "../database/schema";
  import { stores } from "@sapper/app";

  const { page } = stores();

  //   let slug;
  $: slug = $page.params.slug;

  import Nav from "../components/Nav.svelte";
  import Sidebar from "../components/Sidebar.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />
<Sidebar collections={collections} slug={slug} />

<main>
  <slot />
</main>
