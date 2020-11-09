<script>
  export let collections;
  export let slug;
</script>

<style>
  .current {
    color: coral;
  }
</style>

<nav>
  <ul>
    {#each Object.keys(collections) as item}
      <li><a class:current={slug === item} href="./crud/{item}">{item}</a></li>
    {/each}
  </ul>
</nav>
