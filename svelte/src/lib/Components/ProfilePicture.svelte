<script lang="ts">
	import urls from '$lib/urls';
	import { session } from '$lib/stores';
	const size = '3rem';
	const imageUrl = ''.concat(urls.backend, $session.image);
</script>

<a href={urls.profile}>
	<img
		src={imageUrl}
		alt={$session.username}
		class="object-cover rounded-full"
		style="min-width: {size}; min-height: {size}; max-height: {size}; max-width: {size}"
	/>
</a>
