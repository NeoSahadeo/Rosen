<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
  let loading = false,
  display = false,
  message = '', 
  status = 200
</script>
<div>
  {#if display}
    <div class="{(status >= 200 && status < 300) ? 'bg-green-300': 'bg-red-300'} w-full fixed left-0 top-0 rounded-b-lg px-2 py-2 shadow-2xl flex flex-row">
      <div>
        <h1 class="{(status >= 200 && status < 300) ? 'text-green-900': 'text-red-900'} font-black">{message}</h1>
        <p class="{(status >= 200 && status < 300) ? 'text-green-900': 'text-red-900'}">Status Code: {status}</p>
      </div>
      <button class="ml-auto bg-transparent text-black hover:bg-transparent hover:shadow-none" on:click={()=>display=false}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000000" d="m12 13.4l-2.917 2.925q-.276.275-.704.275t-.704-.275t-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.832 7.4 8.404t.275-.704t.7-.275t.7.275L12 10.625L14.892 7.7q.276-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l2.925 2.917q.275.276.275.704t-.275.704q-.3.3-.712.3t-.688-.3z"/></svg>
      </button>
    </div>
  {/if}
</div>
<h1 class="text-white text-4xl mb-8" style="font-weight: 300;">
  <slot name="title"></slot>
</h1>
<form
class="flex flex-col flex-start w-full sm:max-w-full max-w-xs"
method="post"
use:enhance={() => {
  loading = true;
  return async ({ result }) => 
  {
    const data = result.data;
    message = data.message;
    display = data.display;
    status  = data.status;
    setTimeout(()=>{ display = false }, 5000)
    setTimeout(()=>{
        loading = false;
        if (data.redirect) { return goto(data.redirect) };
    }, 3000)
  }
}}
>
  <slot class="{loading ? 'loading' : ''}" {loading}>
  </slot>
  <slot name="submit" {loading}></slot>
</form>
<slot name="extra"></slot>
