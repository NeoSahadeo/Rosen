<script>
  let searchFocus = false;
  let localScrollY, navHeight;
</script>
<svelte:window bind:scrollY={localScrollY} />
<nav bind:clientHeight={navHeight} class="xs:flex flex-row w-full left-0 items-center hidden transition fixed {localScrollY > 0 ? 'drop-shadow-md': ''}" style="background-color: var(--primary-background-color)">
    <div class="ml-2 mr-10">
        <a href='/'>
            <img src="/ThePenroseProject720.png" alt="The Rosen Project Home Link" width="110px" >
        </a>
    </div>
    <div class="flex flex-row items-center px-4 py-1 ml-4 mr-8 rounded-full flex-1 {searchFocus ? 'searchBarContainerFocus' : 'searchBarContainer'}">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#626262" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
        <input type="text" placeholder="Search Rosen" id="searchBar" class="bg-transparent" on:focus={()=>searchFocus = !searchFocus} on:blur={()=>searchFocus = !searchFocus}>
    </div>
    <div class="flex flex-row pr-6 ml-auto">
        <button class="bg-transparent rounded-full p-2 mx-2" >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg>
        </button>
        <button class="bg-transparent rounded-full p-2 mx-2" >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24"><path fill="#ffffff" d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18z"/></svg>
        </button>
        <button class="bg-transparent rounded-full p-2 mx-2" >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"/></svg>
        </button>
        <a class="hover:cursor-pointer" href="/account/profile/" > :) </a>
    </div>
</nav>
<div style="padding-bottom:{navHeight}px" class="pt-4"></div>