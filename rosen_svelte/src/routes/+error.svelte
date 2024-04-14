<script>
  import { page } from '$app/stores';
</script>
<div
  style="margin: auto 0; width: 100%; display: flex; flex-direction: row; font-weight: 300; justify-items: center; align-items: center; padding: 1rem 1rem;"
>
  <div>
    <h1
      style="font-size: 5rem; height: min-content; padding: 0px; margin: 0px; line-height: 1;"
    >
    {$page.status}</h1>
    <p
    >
    Error: {$page.error?.message}
    </p>
  </div>
  <img
    src="/butterflying1080ptrans.png"
    alt="A block of butter with angel wings"
    width="100%"
    style="margin-left: 3rem;"
  >
</div>
