<script>
  import "$lib/app.css";
  import DesktopNavBar from "$lib/components/DesktopNavBar.svelte";
  import Main from "$lib/components/Main.svelte";
  import Message from "$lib/components/Message.svelte";
  import { page } from '$app/stores';
  export let data;
</script>
<Message />
<Main>
  {#if ((data.sessionid != undefined) && (!data.hideNav.includes($page.url.pathname)))}
  <!--DESKTOP NAV-->
  <DesktopNavBar />
  <!--DESKTOP NAV-->
  {/if}
  <slot></slot>
</Main>