<script lang="ts">
  import '../app.postcss';
  import Message from '$lib/Components/Message.svelte';
  import { messages } from '$lib/stores';
  import { defaultMessage } from '$lib/Components/messageFormat';
  export let data
  if (data.message)
  {
    messages.send({
      message: defaultMessage(data.message, data.status),
      timeout: 1000,
    })
  }
</script>
<Message />
<slot />
