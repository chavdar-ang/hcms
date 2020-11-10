<script context="module">
  import env from "../../../config/env";
  import collections from "../../../database/schema";
  import { get } from "../../../lib/api";

  // import env from "../../../config/env";
  // import collections from "../../../database/schema";

  export async function preload({ params }) {
    const { slug } = params;

    console.log("slug", slug);

    // // Check if collection with this slug exist
    if (!(slug in collections)) {
      console.log(
        "The collection does not exists",
        "Available collections:",
        Object.keys(collections)
      );
      this.error(404, `Collection ${slug} does not exists`);
      return;
    }

    try {
      let posts = await get(slug);

      return { posts, slug };
    } catch (error) {
      this.error(404, error);
    }
  }
</script>

<script>
  export let posts;
  export let slug;
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

<h1>{slug} list</h1>

<ul>
  {#if posts.length > 0}
    {#each posts as post}
      <li><a href="/crud/{slug}/{post._id}">{post.title}</a></li>
    {/each}
  {:else}
    <p>Empty</p>
  {/if}
</ul>
