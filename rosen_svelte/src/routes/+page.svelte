<script>
  export let data;
</script>
<style>
  a { margin: 0.4rem; }
  </style>
<div class="my-auto" >
  <img src="ThePenroseProject1080.png" alt="The Rosen Project" class="mx-auto w-64" >
  <h1 class="sm:mt-20 text-white sm:text-5xl text-4xl mt-12" style="font-weight: 300; text-wrap: nowrap;">The Rosen Project</h1>
  <nav class="w-full flex items-center flex-col mt-4">
    <div class="flex flex-row text-white items-center" >
      {#if !data.sessionid}
      <a href="account/signup" class="button-primary">Sign Up</a>
        <span class="mx-2" >
        or
        </span>
      <a href="account/login" class="button-primary">Log In</a>
      {:else}
      <a href="feed/latest" class="button-primary">Latest</a>
      {/if}
    </div>
  </nav>
</div>