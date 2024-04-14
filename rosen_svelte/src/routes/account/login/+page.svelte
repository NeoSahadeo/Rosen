<script lang="ts">
	import {enhance} from '$app/forms';
	import {goto} from '$app/navigation';
  import type { PageData, ActionData, PageServerLoad } from './$types';

  export let data: PageServerLoad;

  export let form: ActionData;

</script>
<h1
class="text-white text-4xl mb-8"
style="font-weight: 300;"
>Log In</h1>
<form
class="flex flex-col flex-start w-full sm:max-w-full max-w-xs"
method="post"
use:enhance={()=>{
  return async ({result}) => {
    if (result.data.redirect)
    {
      goto(result.data.redirect)
    }
  }
}}
>
  <label for="usernameOrEmail" > Username or Email </label>
  <input id="usernameOrEmail" name="username_email" type="text" required>

  <label for="password" > Password </label>
  <input id="password" name="password" type="password" required>

  <input id="submit" type="submit" value="Log In" class="mt-4 w-min button-class ml-auto mr-auto">

</form>
<p
class="mt-2"
>
  Don't have account? 
  <a
  class="link"
  href="/account/signup"
  >
  Sign Up
  </a>
</p>
