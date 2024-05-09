<script>
  import Header from "$lib/Components/Header.svelte";
  import { messengerStore } from "$lib/stores";

  function sendMessage()
  {
    $messengerStore.send({
      message: 'Hello World',
      timeout: 0,
    })
  }
</script>
<Header />
<button on:click={sendMessage}>Spawn Message</button>
<slot />
