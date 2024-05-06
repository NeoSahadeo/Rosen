<script lang="ts">
    import BackHeader from "$lib/Components/BackHeader.svelte";
    import { page } from "$app/stores";
    let path = $page.url.pathname.toString().split('/').pop()
    path = path ? path[0].toUpperCase() + path?.slice(1,) : undefined;
</script>
<BackHeader>
    <svelte:fragment slot='title'>{path}</svelte:fragment>
</BackHeader>
<slot></slot>
