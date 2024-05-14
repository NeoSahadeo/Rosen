import type { Handle } from "@sveltejs/kit";
import { validateSession } from "$lib/api";

export const handle: Handle = async ({ event, resolve }) => {
	let session_id = event.cookies.get('session_id')
	if (session_id) {
		// validate session
		const isValid = await validateSession(session_id)
		if (isValid === true) {
			//@ts-ignore
			event.locals.session_id = session_id;
		}
		if (isValid === false) {
			event.cookies.delete('session_id', { path: '/' })
			session_id = undefined;
		}
	}
	const response = await resolve(event)
	return response

}
