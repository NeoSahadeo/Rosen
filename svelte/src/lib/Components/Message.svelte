<script>
  import { fade, fly } from 'svelte/transition';
  import { expoInOut } from "svelte/easing";
  import Icon from '@iconify/svelte';
  import { messages, messengerStore } from '$lib/stores';
</script>
<section class="fixed top-2 left-1/2 -translate-x-1/2 sm:max-w-sm max-w-80 w-full">
  {#each $messages as message}
  <div class='flex flex-row w-full items-center justify-between variant-filled-primary alert my-2 {message.classes}' style="{message.styles}"
  transition:fly={{delay: 0, duration: 250, y: -50, easing: expoInOut}}>
    {@html message.message}
    <button class='btn pr-0 ml-auto' on:click={()=>{$messengerStore.close(message.id)}}>
      <Icon icon="material-symbols:close" width="32" height="32" />
    </button>
  </div>
  {/each}
</section>
