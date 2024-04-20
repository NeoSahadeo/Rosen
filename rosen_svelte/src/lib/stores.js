import { writable, get, readonly } from 'svelte/store';

const message = writable();
const messageReadonly = readonly(message);

export { message, messageReadonly }