<script lang="ts">
	import Backheader from '$lib/components/ui/backheader.svelte';
	import { urls } from '$lib/constants.js';
	import SettingsHeader from './settingsHeader.svelte';
	import { previousPage } from '$lib/stores';
	import { baseServer } from '$lib/constants.js';
	import { logoutFunction } from '$lib/api';
	import TopLevelNotification from '$lib/components/ui/topLevelNotification.svelte';
	import { onMount } from 'svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import { goto, invalidateAll } from '$app/navigation';
	export let data;
	let profileImageURL = baseServer + data.image;
	const imageSize = '6rem';

	let fileInput: HTMLInputElement;
	let fileValue: any;

	let formData: HTMLFormElement;
	let originalForm: FormData;
	onMount(() => {
		originalForm = new FormData(formData);
	});

	let formObject;
	let changes = 0;
	function getFormData() {
		changes = 0;
		formObject = new FormData(formData);
		compareContent(originalForm, formObject);
	}

	function compareContent(source: FormData, input: FormData) {
		const image = input.get('image');
		if (image) {
			//@ts-ignore
			profileImageURL = URL.createObjectURL(image);
		}
		source.forEach((value, key) => {
			if (!(input.get(key) == value)) {
				changes++;
			}
		});
	}
</script>

{#if changes > 0 || fileValue !== undefined}
	<TopLevelNotification warning="Make Sure to Save Changes" />
{/if}
<a href={$previousPage ? $previousPage : '/latest/'}>
	<Backheader title="Settings" />
</a>
<div class="w-full h-full flex flex-row pl-4 pt-4 gap-8">
	<ul class="menu bg-base-200 w-56 rounded-box h-min md:block hidden">
		<li>
			<a href={urls.userSettings}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					{...$$props}
				>
					<path
						fill="currentColor"
						d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"
					/>
				</svg>
				Settings
			</a>
		</li>
		<li>
			<button
				on:click={() => {
					logoutFunction();
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 2048 2048"
					{...$$props}
				>
					<path
						fill="currentColor"
						d="m2011 960l-446 445l-90-90l291-291H768V896h998l-291-291l90-90zm-859 320h128v640H0V0h1280v640h-128V128H128v1664h1024z"
					/>
				</svg>
				Logout
			</button>
		</li>
	</ul>
	<div class="flex flex-col gap-8">
		<form
			class="flex flex-col gap-8"
			method="post"
			action="?/updateProfile"
			on:input={getFormData}
			bind:this={formData}
			enctype="multipart/form-data"
			use:enhance={({}) => {
				return async ({ result }) => {
					if (result.type === 'success') {
						toast.success('Profile Updated');
						changes = 0;
						fileValue = undefined;
						invalidateAll();
					} else {
						toast.error('An Error Occured');
					}
				};
			}}
		>
			<div class="flex flex-col">
				<SettingsHeader title="Profile Picture" />
				<div class="flex flex-row items-center gap-10">
					<img
						class="object-cover"
						src={profileImageURL}
						alt={data.username}
						style="width: {imageSize}; height: {imageSize}; border-radius: 999999px"
					/>
					<span class="flex gap-5">
						<input name="image" type="file" hidden bind:this={fileInput} bind:value={fileValue} />
						<button type="button" class="btn btn-primary" on:click={() => fileInput.click()}>
							Change Picture
						</button>
						<button class="btn btn-error"> Delete Picture </button>
					</span>
				</div>
			</div>
			<div class="flex flex-col">
				<SettingsHeader title="Username" />
				<label class="input input-bordered flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4 opacity-70"
						><path
							d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
						/></svg
					>
					<input
						name="username"
						type="text"
						class="grow"
						placeholder="Username"
						value={data.username}
					/>
				</label>
			</div>
			<div class="flex flex-col">
				<SettingsHeader title="Email" />
				<label class="input input-bordered flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4 opacity-70"
						><path
							d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
						/><path
							d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
						/></svg
					>
					<input name="email" type="text" class="grow" placeholder="email" value={data.email} />
				</label>
			</div>

			{#if changes > 0 || fileValue !== undefined}
				<button
					class="btn btn-warning self-start shadow-lg"
					style="-webkit-box-shadow:0px 0px 27px 0px rgba(217,255,46,0.51); -moz-box-shadow: 0px 0px 27px 0px rgba(217,255,46,0.51); box-shadow: 0px 0px 27px 0px rgba(217,255,46,0.51);"
					>Update Profile</button
				>
			{:else}
				<button class="btn btn-warning self-start shadow-lg" disabled>Update Profile</button>
			{/if}
		</form>
	</div>
</div>
