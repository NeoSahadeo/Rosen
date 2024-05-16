<script lang="ts">
	import { enhance } from '$app/forms';
	import toast, { type ToasterProps } from 'svelte-french-toast';
	import Backheader from '$lib/components/ui/backheader.svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
</script>

<a href="../">
	<Backheader title="Log In" />
</a>
<div class="container max-w-sm sm:pl-10 sm:px-0 px-4">
	<form
		method="POST"
		use:enhance={({}) => {
			return async ({ result }) => {
				if (result.type === 'success') {
					toast.success('Logged In!');
					goto('/latest/');
				} else {
					toast.error('Log in failed');
				}
			};
		}}
	>
		<!-- <h1 class="text-4xl font-bold my-5 mb-10">Log In</h1> -->
		<label class="input input-bordered flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				viewBox="0 0 24 24"
				{...$$props}
			>
				<path
					fill="currentColor"
					fill-rule="evenodd"
					d="M10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
					clip-rule="evenodd"
				/>
			</svg>
			<input name="username_or_email" type="text" class="grow" placeholder="Username or Email" />
		</label>
		<label class="input input-bordered flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4 opacity-70"
				><path
					fill-rule="evenodd"
					d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
					clip-rule="evenodd"
				/></svg
			>
			<input name="password" type="password" class="grow" value="" placeholder="Password" />
		</label>
		<button class="btn btn-primary mx-auto" type="submit">Log In</button>
	</form>
</div>

<style>
	label {
		margin: 1rem 0 1rem 0;
	}
</style>
