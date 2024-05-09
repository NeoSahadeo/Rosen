<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	export let parent: SvelteComponent;

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<div>
		<h1 class="text-2xl">Create Post</h1>
		<!-- Enable for debugging: -->
		<form class="mt-4">
			<label class="label">
				<span>Name</span>
				<input class="input" type="text" placeholder="Enter name..." />
			</label>
			<label class="label">
				<span>Phone Number</span>
				<input class="input" type="tel" placeholder="Enter phone..." />
			</label>
			<label class="label">
				<span>Email</span>
				<input class="input" type="email" placeholder="Enter email address..." />
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
			<button class="btn {parent.buttonPositive}">Submit Form</button>
		</footer>
	</div>
{/if}
