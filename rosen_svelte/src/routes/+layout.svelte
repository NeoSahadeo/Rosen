<script>
  import "$lib/app.css";
  import DesktopNavBar from "$lib/components/DesktopNavBar.svelte";
  import MobileNavBar from "$lib/components/MobileNavBar.svelte";
  import Main from "$lib/components/Main.svelte";
  import Message from "$lib/components/Message.svelte";
  import { page } from '$app/stores';
  import { messages } from "$lib/stores.js";
  export let data;

  if (data.session_id != undefined)
  {
    messages.send(data.message, 200, 1000)
  }
</script>
<Message />
<Main>
  {#if ((data.session_id != undefined) && (!data.hideNav.includes($page.url.pathname)))}
    <!--DESKTOP NAV-->
    <DesktopNavBar username={data.user_data.username} image={data.user_data.image}/>
    <!--MOBILE NAV-->
    <MobileNavBar />
  {/if}
  <slot></slot>
</Main>