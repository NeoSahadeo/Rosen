import { writable } from "svelte/store";

const userProfileData = writable();
const logout = writable(false);

export { userProfileData, logout }
