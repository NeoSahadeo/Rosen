import { writable } from "svelte/store";

const userProfileData = writable();
const logout = writable(false);
const previousPage = writable();

export { userProfileData, logout, previousPage }
