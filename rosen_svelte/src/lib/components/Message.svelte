<script>
    import { messages } from "$lib/stores";
    import { fade } from "svelte/transition";

    function remove(index)
    {
        document.getElementById(`${index}`)?.remove()
    }
</script>
<section class="absolute left-1/2 bottom-0 pb-4 -translate-x-1/2 max-w-sm w-full">
    {#each $messages as message, index}
        <div
        id="{index.toString()}"
        transition:fade={{ delay: 0, duration: 200 }}
        class="{
        (message.status == 0) ? 'bg-black text-white' : ''
        }{
        (message.status >= 200 && message.status < 299) ? 'bg-green-400 text-green-950' : ''
        }{
        (message.status >= 400 && message.status < 499) ? 'bg-red-400 text-red-950' : ''
        } pl-3 pr-0 py-2 rounded mt-2 flex flex-row items-center justify-center text-nowrap">
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
            <button on:click={()=>remove(index)} class="bg-transparent ml-auto hover:bg-transparent hover:shadow-none">
                <img src="/MaterialSymbolsCloseSmallRounded.svg">
            </button>
        </div>
    {/each}
</section>