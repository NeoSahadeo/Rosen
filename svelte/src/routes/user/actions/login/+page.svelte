<script lang="ts">
  import Form from "$lib/Components/Form.svelte";
  import BackHeader from "$lib/Components/BackHeader.svelte";
</script>
<BackHeader title='Log In'/>
<Form method='post'>
  <label class="label">
    <span>Username or Email<span class="text-red-500">*</span></span>
    <input class="input" type="text" name='username_or_email' placeholder="Enter Username or Email" required />
  </label>
  <label class="label">
    <span>Password<span class="text-red-500">*</span></span>
    <input class="input" type="password" name='password' placeholder="Enter Password" required />
  </label>
  <button class='btn variant-filled-primary font-bold' type='submit'>Log In</button>
</Form>
