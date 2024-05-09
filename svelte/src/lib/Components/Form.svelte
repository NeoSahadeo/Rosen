<script lang='ts'>
  import {enhance} from '$app/forms';
  import {invalidateAll} from '$app/navigation';
  import type { Message } from '$lib/interfaces';
  import { redirect } from '@sveltejs/kit';
  import { messengerStore } from '$lib/stores';
  export let method

  function callback(result: any, update: any)
  {
    const response: Message = result.data
    $messengerStore.send({
      message: response.message,
      classes: response.classes,
      styles: response.styles,
      timeout: response.timeout,
    } as Message)
  }
</script>
<form class="flex flex-col px-4 pt-0 max-w-sm mx-auto" 
enctype='multipart/form-data'
method='{method}'
use:enhance={({formElement, formData, action, cancel, submitter})=>
{
  return async({result, update}) => { 
    callback(result, update); 
    invalidateAll()
  }
}
}>
  <style>
    label {
      margin: 1rem 0 0 0;
    }
    [type='submit'] {
      margin-top: 1rem;
      align-self: self-start;
    }
  </style>
  <slot />
</form>
<slot name='extra' />
