<script>
  export let data;
  import { page } from '$app/stores';
</script>
{#if !data.hideNav.includes($page.url.pathname)}
<nav
class="absolute left-0"
>
<a href='/'>
<img
src="/ThePenroseProject720.png"
alt="The Rosen Project Home Link"
width="131px"
>
</a>
</nav>
{/if}
<div
class="mt-16"
>
<style>
  label {
    margin: 0.4rem 0rem;
  }
  input {
    margin-bottom: 1rem;
  }
  #submit:disabled {
    background-color: #4d4d4d;
  }
</style>
</div>
<slot/>
