import { writable } from "svelte/store";

const session = writable()

// This is the messages storage
const messages = writable()
// This is the messaging object
const messengerStore = writable()

export { session, messages, messengerStore }
