<script lang="ts">
	export let data;
</script>

<div class="flex flex-col items-center justify-center" style="height: 100dvh;">
	<h1 class="sm:text-5xl text-4xl font-bold sm:text-nowrap mb-2">The Rosen Project</h1>
	<span class="sm:text-xl text-center">
		A
		<a class="link-primary" target="_blank" href="https://reddit.com/"> Reddit </a>
		clone built with
		<a class="link-primary" target="_blank" href="https://kit.svelte.dev/"> Svelte </a>
		and
		<a class="link-primary" target="_blank" href="https://www.django-rest-framework.org/">
			Django
		</a>
	</span>
	<span class="text-base">
		Explore
		<a class="link-secondary" target="_blank" href="https://github.com/NeoSahadeo/Rosen">
			The Rosen Project
		</a>
		repo.
	</span>
	<img src="images/Rosen1080.png" alt="Rosen Logo" class="sm:max-w-sm max-w-80" />
	<span class="mt-5">
		{#if data.session_id !== 'undefined' && data.session_id}
			<a href="/latest/">
				<button class="btn btn-primary">Latest</button>
			</a>
		{:else}
			<a href="/account/login">
				<button class="btn btn-primary">Log In</button>
			</a>
			<span class="text-xl mx-5">or</span>
			<a href="/account/signup">
				<button class="btn btn-primary">Sign Up</button>
			</a>
		{/if}
	</span>
</div>
