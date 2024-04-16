<script>
  export let data;
</script>
{#each data.posts as post }
<div>
<img src="{post.images[0]}">
{post.title}
</div>
{/each}
