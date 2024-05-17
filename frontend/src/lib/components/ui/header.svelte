<script lang="ts">
	import CreatePostModal from './createPostModal.svelte';
	import { urls } from '$lib/constants';
	import { logoutFunction } from '$lib/api';
	export let profileImageURL = '',
		username = '';

	let toggleProfileDropdown = false;
	let dropdownMenu: HTMLElement;

	const dropdownOptions = {
		Settings: urls.userSettings
	};
	function clickOutsideDropdown(e) {
		if (!dropdownMenu.contains(e.target)) {
			toggleProfileDropdown = false;
			removeEventListeners();
		}
	}
	const addEventListeners = () => {
		window.addEventListener('touchstart', clickOutsideDropdown);
		window.addEventListener('mousedown', clickOutsideDropdown);
	};
	const removeEventListeners = () => {
		try {
			window.removeEventListener('touchstart', clickOutsideDropdown);
			window.removeEventListener('mousedown', clickOutsideDropdown);
		} catch {}
	};

	$: toggleProfileDropdown ? addEventListeners() : removeEventListeners();
</script>

<CreatePostModal />
<header class="navbar flex flex-row justify-between shadow-lg">
	<label class="input input-bordered flex items-center gap-2">
		<input type="text" class="grow" placeholder="Search" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="w-4 h-4 opacity-70"
			><path
				fill-rule="evenodd"
				d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
				clip-rule="evenodd"
			/></svg
		>
	</label>
	<div>
		<button class="btn btn-ghost" onClick="createPost.showModal()">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
				{...$$props}
			>
				<path
					fill="currentColor"
					d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"
				/>
				<path
					fill="currentColor"
					d="M386.34 193.66L264.45 315.79A41.1 41.1 0 0 1 247.58 326l-25.9 8.67a35.92 35.92 0 0 1-44.33-44.33l8.67-25.9a41.1 41.1 0 0 1 10.19-16.87l122.13-121.91a8 8 0 0 0-5.65-13.66H104a56 56 0 0 0-56 56v240a56 56 0 0 0 56 56h240a56 56 0 0 0 56-56V199.31a8 8 0 0 0-13.66-5.65"
				/>
			</svg>
		</button>
		<div class="ml-4">
			<button
				on:click={() => {
					toggleProfileDropdown = !toggleProfileDropdown;
				}}
			>
				<img
					src={profileImageURL}
					alt="Profile Picture of {username}"
					class="btn btn-ghost btn-circle avatar object-cover"
				/>
			</button>
			<ul
				bind:this={dropdownMenu}
				class=" {toggleProfileDropdown
					? ''
					: 'hidden'} absolute right-0 mt-4 mr-4 dropdown-content menu p-2 shadow-lg rounded-box w-52 border-primary border-2"
			>
				{#each Object.keys(dropdownOptions) as dropdownOption}
					<li><a href={dropdownOptions[dropdownOption]}>{dropdownOption}</a></li>
				{/each}
				<li></li>
				<li><button on:click={logoutFunction}>Logout</button></li>
			</ul>
		</div>
	</div>
</header>
