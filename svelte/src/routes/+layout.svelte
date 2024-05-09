<script lang="ts">
	export let data;
	import '../app.postcss';
	import Message from '$lib/Components/Message.svelte';
	import Messenger from '$lib/messenger';
	import { defaultMessage } from '$lib/Components/messageFormat';
	import { session, messengerStore } from '$lib/stores';
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import CreatePost from '$lib/Components/CreatePost.svelte';

	// Registering Modals
	initializeStores();
	const modalRegistry: Record<string, ModalComponent> = {
		createPostForm: { ref: CreatePost }
	};

	// Registering Messenger api
	const messenger = new Messenger();
	messengerStore.set(messenger);

	// Verification Message
	if (data.message) {
		messenger.send({
			message: defaultMessage(data.message, data.status),
			timeout: 1000
		});
	}

	// Store session data
	if (data.data) {
		session.set(data.data);
	}
</script>

<Modal components={modalRegistry} />
<Message />
<slot />
