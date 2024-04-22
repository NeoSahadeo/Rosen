<script>
  import "$lib/app.css";
  import DesktopNavBar from "$lib/components/DesktopNavBar.svelte";
  import MobileNavBar from "$lib/components/MobileNavBar.svelte";
  import Main from "$lib/components/Main.svelte";
  import Message from "$lib/components/Message.svelte";
  import { page } from '$app/stores';
  import { messages } from "$lib/stores.js";
  export let data;

  if (data.sessionid != undefined)
  {
    messages.send('Session Verfied', 200, 1000)
  }
</script>
<Message />
<Main>
  {#if ((data.sessionid != undefined) && (!data.hideNav.includes($page.url.pathname)))}
  <!--DESKTOP NAV-->
  <DesktopNavBar />
  <!--DESKTOP NAV-->
  <!--MOBILE NAV-->
  <MobileNavBar />
  <!--MOBILE NAV-->
  {/if}
  <slot></slot>
</Main>