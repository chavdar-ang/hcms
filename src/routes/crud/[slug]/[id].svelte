<script context="module">
  import env from "../../../config/env";

  export async function preload({ params, query }) {
    const { slug, id } = params;

    const url = `${env.api}${slug}/${id}`;

    const res = await this.fetch(url);

    if (res.status === 200) {
      const post = await res.json();
      return { post, slug };
    }

    this.error(res.status, res.statusText);
  }
</script>

<script>
  export let post;
  export let slug;
</script>

<style>
</style>

<svelte:head>
  <title>{slug} - {post._id}</title>
</svelte:head>

<h1>{slug} - {post._id}</h1>

<div>
  {#if post}
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <hr />
  {/if}
  <a href="/crud/{slug}">Back</a>
</div>
