<script >
  import { enhance } from "$app/forms";
  import { messages } from "$lib/stores";
  import { invalidateAll } from "$app/navigation";
</script>
<h1 class="text-white text-4xl mb-8" style="font-weight: 300;">
  <slot name="title"></slot>
</h1>
<form class="flex flex-col flex-start max-w-sm w-full" method="post"
use:enhance={() => {
  messages.send('Sending Request', 0)
  return async ({ result, update }) => {
    // @ts-ignore
    const { message, status } = result.data;
    messages.send(message, status)
    messages.send('Loading Content', 0)
    invalidateAll()
  }
}}>
  <slot>
  </slot>
</form>
<slot name="extra"></slot>
