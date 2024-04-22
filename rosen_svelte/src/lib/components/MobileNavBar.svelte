<script>
  let searchFocus = false;
  let localScrollY, navHeight,
  showMenu = false;

  function toggleMenu()
  {
    showMenu = !showMenu;
  }
</script>
<svelte:window bind:scrollY={localScrollY} />
<nav bind:clientHeight={navHeight} class="h-20 z-40 xs:hidden flex-row w-full left-0 items-center flex transition fixed {localScrollY > 0 ? 'drop-shadow-md': ''}" style="background-color: var(--primary-background-color)">
    <button class="button-normal" on:click={toggleMenu}>
    </button>
    <div>
        Hey
    </div>
</nav>
<div style="padding-bottom:{navHeight}px" class="pt-0 xs:hidden block"></div>