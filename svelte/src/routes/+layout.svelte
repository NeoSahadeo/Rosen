<script lang="ts">
	export let data;
	import '../app.postcss';

	import Message from '$lib/Components/Message.svelte';
	import Messenger from '$lib/messenger';
	import { defaultMessage } from '$lib/Components/messageFormat';
	import { session, messengerStore } from '$lib/stores';

	const messenger = new Messenger();
	messengerStore.set(messenger);

	if (data.message) {
		messenger.send({
			message: defaultMessage(data.message, data.status),
			timeout: 1000
		});
	}

	if (data.data) {
		session.set(data.data);
	}
</script>

<Message />
<slot />
