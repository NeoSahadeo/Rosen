<script>
  export let data;
  import Post from '$lib/components/Post.svelte';
</script>
{#each data.posts as post }
<Post {post}></Post>
{/each}