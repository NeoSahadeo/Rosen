<script>
  import Form from "$lib/components/Form.svelte";
  const usernameValReg = /^[a-zA-Z_0-9]+$/;
  let password1 = '', 
  password2 = '',
  email = '', 
  username = '';

  function usernameValidator()
  {
    return (
    usernameValReg.test(username) && 
    username.length < 17 && 
    username.length > 2
    );
  }
</script>
<Form>

<span slot="title">Sign Up</span>
<label for="email" > Email </label>
<input id="email" name="email" type="email" bind:value={email} required>

<div
  class="flex flex-row text-nowrap w-full items-center"
>
  <div
    class="flex flex-row items-center"
  >
    <label for="username" > Username </label>
  </div>
  <div class="ml-2">
  {#if !usernameValidator() && username !== ''}
  (<span class="text-red-600 font-semibold" > Username is not valid </span>)
  {/if}
  </div>
</div>
<input id="username" name="username" type="text" bind:value={username} on:keyup={usernameValidator} required>

<label for="password" > Password </label>
<input id="password" name="password" type="password" bind:value={password1} required>

<div>
  <label for="confirm_password" > Confirm Password </label>
  {#if password1 !== '' && password2 !=='' && (password1 !== password2)}
  ( <span class="text-red-600 font-semibold" > Passwords Do Not Match </span>) 
  {/if}
</div>

<input id="confirm_password" name="confirm password" type="password" bind:value={password2} required>

<input id="submit" type="submit" value="Create Account"
class="mt-4 w-min button-primary ml-auto mr-auto disabled:cursor-not-allowed" disabled={
    password1 !== password2 || 
    password1 === '' ||
    password2 === '' ||
    email === '' ||
    username === '' ||
    !usernameValidator()
  }
>
<span slot="extra">
  <p
  class="mt-2"
  >
    Already have account? 
    <a
    class="link"
    href="/account/login"
    >
    Log In
    </a>
  </p>
</Form>
