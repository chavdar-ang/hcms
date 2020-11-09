<script context="module">
  import env from "../../../config/env";

  export async function preload({ params, query }) {
    const { entity } = params;

    const res = await this.fetch(env.api + entity);

    if (res.status === 200) {
      const posts = await res.json();
      return { posts, entity };
    }

    this.error(res.status, res.statusText);
  }
</script>

<script>
  export let posts;
  export let entity;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Entities - {entity}</title>
</svelte:head>

<h1>{entity} list</h1>

<ul>
  {#each posts as post}
    <li><a href="/crud/{entity}/{post._id}">{post.title}</a></li>
  {/each}
</ul>
