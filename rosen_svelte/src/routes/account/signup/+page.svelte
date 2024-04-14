<script>
  export 
  const emailValReg = /^\S+\@\S+(?=\.)\.+\S+$/;
  const usernameValReg = /^[a-zA-Z_0-9]+$/;
  let password1 = '', 
  password2 = '',
  email = '', 
  username = '';

  function emailValidator()
  {
    return emailValReg.test(email)
  }
  function usernameValidator()
  {
    return (
    usernameValReg.test(username) && 
    username.length < 17 && 
    username.length > 2
    );
  }
</script>
<h1
class="text-white text-4xl mb-8"
style="font-weight: 300;"
>Sign Up</h1>
<form
class="flex flex-col flex-start w-full sm:max-w-full max-w-xs"
method="post"
>
<div>
  <label for="email" > Email </label>
  {#if !emailValidator() && email !== ''}
  (<span class="text-red-600 font-semibold" > Email is not valid </span>)
  {/if}
</div>
<input id="email" name="email" type="email" bind:value={email} on:keyup={emailValidator} required>

<div
  class="flex flex-row text-nowrap w-full items-center"
>
  <div
    class="flex flex-row items-center"
  >
    <label for="username" > Username </label>
<!--    <img -->
<!--      src="/MaterialSymbolsInfoOutline.svg"-->
<!--      alt="Info Icon"-->
<!--      class="w-4 ml-1 hover:cursor-help"-->
<!--    >-->
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

<div class="flex flex-row items-center">
  <input id='autologin' name='autologin' type="checkbox" class="w-min m-0 checkmark" checked>
  <label for='autologin' class="pl-4">Log in immediately</label>
</div>

<input id="submit" type="submit" value="Create Account"
class="mt-4 w-min button-class ml-auto mr-auto disabled:cursor-not-allowed" disabled={
    password1 !== password2 || 
    password1 === '' ||
    password2 === '' ||
    email === '' ||
    !emailValidator() ||
    username === '' ||
    !usernameValidator()
  }
>

</form>
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
