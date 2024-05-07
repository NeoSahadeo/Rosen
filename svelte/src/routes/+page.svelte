<script lang="ts">
  import DefaultButton from "$lib/Components/DefaultButton.svelte";
  import { session } from "$lib/stores";
  import urls from '$lib/urls';
  const hide = $session ? false : true;
</script>
<main class='flex flex-col w-screen h-screen items-center'>
  <div class="h-1/5 pt-10">
    <h1 class="h1 font-bold bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-transparent box-decoration-clone">The Rosen Project</h1>
    <h2 class="h4 mt-2 w-full">A <a class='font-bold' style='color:#FF5700;' href='https://reddit.com/'>Reddit</a> Clone by <span class="italic font-bold">Neo</span></h2>
  </div>
  <div class='w-full h-3/5 flex items-center justify-center'>
    <img src='images/Rosen1080.png' alt="The Rosen Project Blackhole" style="max-height: 80%;">
  </div>
  <div class='h-1/5 pt-4 flex flex-col items-center w-full'>
    <div class='flex flex-row items-center max-w-sm w-full justify-center {hide ? "" : "hidden"}'>
      <a href={urls.signup}>
	<DefaultButton text={'Sign Up'} /> 
      </a>
      <p class="mx-8">Or</p>
      <a href={urls.login}>
	<DefaultButton text={'Log In'} /> 
      </a>
    </div>
    <div class='{hide ? "hidden" : "block"}'>
      <a href={urls.latest}>
	<DefaultButton text={'Check Out The Latest!'} /> 
      </a>
    </div>
    <p class="mt-5">Explore <a class="text-cyan-400" href='https://github.com/NeoSahadeo/Rosen'> The Rosen Project </a>repo</p>
  </div>
</main>
