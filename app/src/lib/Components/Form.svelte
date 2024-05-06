<script lang='ts'>
  import {enhance} from '$app/forms';
  import {invalidateAll} from '$app/navigation';
  import { messages } from '$lib/stores';
  import type { Message } from '$lib/interfaces';
  export let method

  function callback(result: any, update: any)
  {
    const response: Message = result.data
    messages.send({
      message: response.message,
      classes: response.classes,
      styles: response.styles,
      timeout: response.timeout,
    } as Message)
    invalidateAll()
  }
</script>
<form class="flex flex-col px-4 pt-0 max-w-sm" 
method='{method}'
use:enhance={({formElement, formData, action, cancel, submitter})=>
{
  return async({result, update}) => { callback(result, update) }
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
