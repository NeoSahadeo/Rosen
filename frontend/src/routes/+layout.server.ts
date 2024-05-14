import { redirect } from "@sveltejs/kit";
import { allowedNonAuth, notAllowedAuth } from "$lib/constants";

export const load = async ({ locals, url }) => {
	const session_id = locals.session_id;

	// Anonymous users can only use these urls
	if (!allowedNonAuth.includes(url.pathname) && !session_id) {
		throw redirect(307, '/')
	}

	// Logged in users are blocked from these urls
	if (notAllowedAuth.includes(url.pathname) && session_id) {
		throw redirect(307, '/')
	}
}
