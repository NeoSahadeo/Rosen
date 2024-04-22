<script>
    import { Icon } from "$lib/api";
    let searchFocus = false;
    let localScrollY, navHeight;
    let iconSize = '2.5rem';
</script>
<style>
</style>
<svelte:window bind:scrollY={localScrollY} />
<nav bind:clientHeight={navHeight} class="z-40 xs:flex flex-row w-full left-0 items-center hidden transition fixed {localScrollY > 0 ? 'drop-shadow-md': ''}" style="background-color: var(--primary-background-color)">
    <div class="ml-2 mr-10">
        <a href='/'>
            <img src="/ThePenroseProject720.png" alt="The Rosen Project Home Link" width="110px" >
        </a>
    </div>
    <div class="flex flex-row items-center px-4 py-1 ml-4 mr-8 rounded-full flex-1 {searchFocus ? 'searchBarContainerFocus' : 'searchBarContainer'}">
        <div class="w-7">
            {@html Icon('search')}
        </div>
        <input type="text" placeholder="Search Rosen" id="searchBar" class="bg-transparent" on:focus={()=>searchFocus = !searchFocus} on:blur={()=>searchFocus = !searchFocus}>
    </div>
    <div class="flex flex-row pr-6 ml-auto" style="--iconSize:{iconSize}">
        <button class="bg-transparent rounded-full p-2 mx-2 iconSize">
            {@html Icon('add')}
        </button>
        <button class="bg-transparent rounded-full p-2 mx-2 iconSize" >
            {@html Icon('messages')}
        </button>
        <button class="bg-transparent rounded-full p-2 mx-2 iconSize" >
            {@html Icon('notifications')}
        </button>
        <a class="hover:cursor-pointer" href="/account/profile/" > :) </a>
    </div>
</nav>
<div style="padding-bottom:{navHeight}px" class="pt-4 xs:block hidden"></div>