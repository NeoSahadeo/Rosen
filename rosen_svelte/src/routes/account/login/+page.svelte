<script lang="ts">
  import Form from "$lib/components/Form.svelte";
  let username = '',
  password = ''
</script>
<Form>
  <span slot="title">
  Log In
  </span>
    <label for="usernameOrEmail" > Username or Email </label>
    <input id="usernameOrEmail" name="username_email" type="text" bind:value={username} required>
    <label for="password" > Password </label>
    <input id="password" name="password" type="password" bind:value={password} required>
    <input id="submit" type="submit" value="Log In" 
    class="mt-4 w-min button-primary ml-auto mr-auto disabled:cursor-not-allowed" disabled={
      username === ''||
      password === '' 
    }>
    <span slot="extra">
    <p class="mt-2">
      Don't have account? 
      <a
      class="link"
      href="/account/signup"
      >
      Sign Up
      </a>
    </p>
    </span>
</Form>
