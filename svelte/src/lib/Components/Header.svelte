<script lang="ts">
	import { session } from '$lib/stores';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import ProfilePicture from './ProfilePicture.svelte';
	import Search from './Search.svelte';
	import Icon from '@iconify/svelte';
	const size = '2.4rem';

	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	const createPost: ModalSettings = {
		type: 'component',
		component: 'createPostForm'
	};
</script>

<div class="flex flex-row w-full py-4 px-3 bg-surface-900">
	<Search />
	<div class="sm:flex hidden items-center">
		<button
			on:click={() => {
				modalStore.trigger(createPost);
			}}
		>
			<Icon class="mx-3" icon="material-symbols:add" width="32" height="32" />
		</button>
		<button>
			<Icon class="mx-3" icon="flowbite:messages-solid" width="32" height="32" />
		</button>
		<button>
			<Icon class="mx-3 mr-5" icon="material-symbols:notifications" width="32" height="32" />
		</button>
	</div>
	<div class="sm:hidden block">
		<Icon icon="material-symbols:menu" width={size} height={size} />
	</div>
	<ProfilePicture />
</div>
