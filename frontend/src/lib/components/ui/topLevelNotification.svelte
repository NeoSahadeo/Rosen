<script lang="ts">
	export let warning;
</script>

<div
	class="absolute bg-warning w-screen min-h-16 py-4 px-4 text-warning-content font-bold flex flex-row items-center"
>
	<svg
		class="mr-4"
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		viewBox="0 0 24 24"
		{...$$props}
	>
		<path
			fill="currentColor"
			d="M1 21L12 2l11 19zm11-3q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m-1-3h2v-5h-2z"
		/>
	</svg>
	{@html warning}
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...$$props}>
	<path
		fill="currentColor"
		d="M1 21L12 2l11 19zm11-3q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m-1-3h2v-5h-2z"
	/>
</svg>

