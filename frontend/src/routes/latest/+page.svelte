<script lang="ts">
	import { baseServer } from '$lib/constants.js';
	import Header from '$lib/components/ui/header.svelte';
	export let data;
	const profileImageURL = baseServer + data.image;
</script>

<Header {profileImageURL} username={data.username} />
