<script lang="ts">
  import Form from "$lib/components/Form.svelte";
  let username = '',
  password = ''
</script>
<Form let:loading let:status>
  <span slot="title">
  Log In
  </span>
    <label class="{loading ? 'invisible' : ''}" for="usernameOrEmail" > Username or Email </label>
    <input class="{loading ? 'invisible' : ''}" id="usernameOrEmail" name="username_email" type="text" bind:value={username} required>
    <label class="{loading ? 'invisible' : ''}" for="password" > Password </label>
    <input class="{loading ? 'invisible' : ''}" id="password" name="password" type="password" bind:value={password} required>
    <input id="submit" type="submit" value="{loading ? `Attempting Log In...`: 'Log In'}" 
    class="mt-4 w-min button-class ml-auto mr-auto disabled:cursor-not-allowed" disabled={
      loading ||
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
