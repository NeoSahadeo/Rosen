<script>
  import { AppBar } from "@skeletonlabs/skeleton";
  import { redirect } from "@sveltejs/kit";
  export let title;
</script>
<AppBar>
  <a slot='lead' href='/'>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" {...$$props}>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="43.5" d="M244 400L100 256l144-144M120 256h292" />
      </svg>
    </button>
  </a>
  <h1 class="h3 font-semibold">
    {title}
  </h1>
</AppBar>
