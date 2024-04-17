<script>
  import { page } from '$app/stores';
</script>
<div class="flex flex-row justify-center items-center">
  <div>
    <h1 style="font-size: 5rem; height: min-content; padding: 0px; margin: 0px; line-height: 1;">
    {$page.status}</h1>
    <p>Error: {$page.error?.message}</p>
  </div>
  <img src="/butterflying1080ptrans.png" alt="A block of butter with angel wings" width="40%" style="margin-left: 3rem;" >
</div>
