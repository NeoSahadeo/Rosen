<script lang="ts">
	import Backheader from '$lib/components/ui/backheader.svelte';
	import { urls } from '$lib/constants.js';
	import SettingsHeader from './settingsHeader.svelte';
	import { baseServer } from '$lib/constants.js';
	import { logoutFunction } from '$lib/api';
	export let data;
	const profileImageURL = baseServer + data.image;
	const imageSize = '6rem';
</script>

<a
	href="javascript.void()"
	on:click={() => {
		history.back();
	}}
>
	<Backheader title="Settings" />
</a>
<div class="w-full h-full flex flex-row pl-4 pt-4 gap-8">
	<ul class="menu bg-base-200 w-56 rounded-box h-min">
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
					<button class="btn btn-primary"> Change Picture </button>
					<button class="btn btn-error"> Delete Picture </button>
				</span>
			</div>
		</div>
		<div class="flex flex-col">
			<SettingsHeader title="Username" />
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
		</div>
	</div>
</div>
