<script lang="ts">
  import '../app.postcss';
  import Message from '$lib/Components/Message.svelte';
  import { session, messengerStore } from '$lib/stores';
  import Messenger from '$lib/messenger';
  import { defaultMessage } from '$lib/Components/messageFormat';
  export let data

  const messenger = new Messenger();
  messengerStore.set(messenger)

  if (data.message)
  {
    messenger.send({
      message: defaultMessage(data.message, data.status),
      timeout: 1000,
    })
  }

  if (data.data) { session.set(data.data) }

</script>
<Message />
<slot />
