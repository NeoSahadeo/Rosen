<script>
  import Post from '$lib/components/Post.svelte';
  import { messages } from "$lib/stores";
  export let data;
</script>
<div>
  {#each data.posts as post }
  <Post {post}></Post>
  {/each}
  <button on:click={()=>{messages.send('Message', 0, 0)}}></button>
</div>