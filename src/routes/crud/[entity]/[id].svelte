<script context="module">
  import env from "../../../config/env";

  export async function preload({ params, query }) {
    const { entity, id } = params;

    const url = `${env.api}${entity}/${id}`;

    const res = await this.fetch(url);

    if (res.status === 200) {
      const post = await res.json();
      return { post, entity };
    }

    this.error(res.status, res.statusText);
  }
</script>

<script>
  export let post;
  export let entity;
</script>

<style>
</style>

<svelte:head>
  <title>{entity} - {post._id}</title>
</svelte:head>

<h1>{entity} - {post._id}</h1>

<div>
  {#if post}
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <hr />
  {/if}
  <a href="/crud/{entity}">Back</a>
</div>
