<script>
  import Post from '$lib/components/Post.svelte';
  import { messages } from "$lib/stores";
  export let data;
</script>
{#each data.posts as post }
<Post {post}></Post>
{/each}