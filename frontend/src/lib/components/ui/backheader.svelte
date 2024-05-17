<script lang="ts">
	export let title = '';
</script>

<div class="navbar shadow-xl">
	<div class="hover:cursor-pointer">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 512 512"
			{...$$props}
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="43.5"
				d="M244 400L100 256l144-144M120 256h292"
			/>
		</svg>
	</div>
	<h1 class="text-3xl font-bold ml-3">{title}</h1>
</div>
