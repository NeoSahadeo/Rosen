<script lang="ts">
  import Form from "$lib/Components/Form.svelte";
</script>
<Form  method='post'>
  <label class="label">
    <span>Username<span class="text-red-500">*</span></span>
    <input class="input" type="text" id='username' placeholder="Enter Username" required />
  </label>
  <label class="label">
    <span>Email<span class="text-red-500">*</span></span>
    <input class="input" type="email" id='email' placeholder="Enter Email" required />
  </label>
  <label class="label">
    <span>Password<span class="text-red-500">*</span></span>
    <input class="input" type="password" id='password' placeholder="Enter Password" required />
  </label>
  <label class="label">
    <span>Confirm Password<span class="text-red-500">*</span></span>
    <input class="input" type="password" id='confirm_password' placeholder="Enter Password" required/>
  </label>
  <label class="label">
    <span>Profile Picture</span>
    <input class="input" type="file" />
  </label>
  <button class='btn variant-filled-primary font-bold' type='submit'>Sign Up</button>
</Form>
