<script>
    import { Icon } from "$lib/api";
    import { messages } from "$lib/stores";
    import { fade } from "svelte/transition";
    const iconSize = '2rem';
</script>
<section class="fixed pb-4 px-4 max-w-xs w-full z-50 bottom-0 sm:left-full sm:-translate-x-full left-1/2 -translate-x-1/2" style="--iconSize:{iconSize}">
    {#each $messages as message}
        <div
        id="{message.id}"
        transition:fade={{ delay: 0, duration: 200 }}
        class="{
        (message.status == 0) ? 'bg-white text-black' : ''
        }{
        (message.status >= 200 && message.status < 299) ? 'bg-green-400 text-green-950' : ''
        }{
        (message.status >= 300 && message.status < 399) ? 'bg-orange-400 text-orange-950' : ''
        }{
        (message.status >= 400 && message.status < 499) ? 'bg-red-400 text-red-950' : ''
        } pl-3 pr-0 py-2 rounded mt-2 flex flex-row items-center text-nowrap">
            <span class="flex flex-col">
                <p class="font-bold">
                    {message.message}
                </p>
                {#if message.status > 0}
                    <p class="italic text-sm">
                        Status: {message.status}
                    </p>
                {/if}
            </span>
            <button on:click={messages.remove(message.id)} class="iconSize ml-auto mr-4 invert">
                {@html Icon('close')}
            </button>
        </div>
    {/each}
</section>