<script context="module">
  // import env from "../../../config/env";
  // import collections from "../../../database/schema";

  // export async function preload({ params }) {
  //   const { slug } = params;

  //   // Check if collection with this slug exist
  //   if (!(slug in collections)) {
  //     console.log(
  //       "The collection does not exists",
  //       "Available collections:",
  //       Object.keys(collections)
  //     );
  //     this.error(404, `Collection ${slug} does not exists`);
  //     return;
  //   }

  //   const res = await this.fetch(env.api + slug);

  //   if (res.status === 200) {
  //     const posts = await res.json();
  //     return { posts, slug };
  //   }

  //   this.error(res.status, res.statusText);
  // }
</script>

<script>
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  import env from "../../../config/env";
  import collections from "../../../database/schema";
  import axios from "axios";

  const { page } = stores();

  const { slug } = $page.params;
  console.log("slug", slug);
  // $: slug = $page.params;
  // $: console.log($page, slug);

  let posts = [];
  let error = null;

  onMount(async () => {
    if (!(slug in collections)) {
      console.log(
        "The collection does not exists",
        "Available collections:",
        Object.keys(collections)
      );

      error = `Collection ${slug} does not exists`;
      return;
    }
    try {
      const res = await axios.get(env.api + slug);
      posts = res.data;
    } catch (e) {
      error = e;
    }
  });

  // export let posts;
  // export let slug;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Entities - {slug}</title>
</svelte:head>

{#if error !== null}
  {error}
{:else}
  <h1>{slug} list</h1>

  <ul>
    {#each posts as post}
      <li><a href="/crud/{slug}/{post._id}">{post.title}</a></li>
    {/each}
  </ul>
{/if}
