<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
  import type { ActionData, PageServerLoad } from './$types';
  let loading = false,
  display = false,
  message = '', 
  username = '',
  password = '',
  status = 200
</script>
<h1
class="text-white text-4xl mb-8"
style="font-weight: 300;"
>Log In</h1>
<form
class="flex flex-col flex-start w-full sm:max-w-full max-w-xs"
method="post"
use:enhance={() => {
  loading = true;
  return async ({ result }) => 
  {
    const data = result.data;
    setTimeout(()=>{
      loading = false;
      message = data.message;
      display = data.display;
      message = data.message;
      status  = data.status;
      if (data.redirect) goto(data.redirect);
    }, 3000)
  }
}}
>
  <div class="{loading ? 'loading' : ''}"
  >
    <label class="{loading ? 'invisible' : ''}" for="usernameOrEmail" > Username or Email </label>
    <input class="{loading ? 'invisible' : ''}" id="usernameOrEmail" name="username_email" type="text" bind:value={username} required>
    <label class="{loading ? 'invisible' : ''}" for="password" > Password </label>
    <input class="{loading ? 'invisible' : ''}" id="password" name="password" type="password" bind:value={password} required>
  </div>
  {#if display}
  <div >
  <h1 class="text-red-600">{message}</h1>
  <p class="text-red-400">Status Code: {status}</p>
  </div>
  {/if}
  <input id="submit" type="submit" value="{loading ? 'Attempting Log In...': 'Log In'}" 
  class="mt-4 w-min button-class ml-auto mr-auto disabled:cursor-not-allowed" disabled={
    loading ||
    username === ''||
    password === ''
  }>
</form>
<p class="mt-2">
  Don't have account? 
  <a
  class="link"
  href="/account/signup"
  >
  Sign Up
  </a>
</p>
