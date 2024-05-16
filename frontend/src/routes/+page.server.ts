import type { Actions } from "./$types"
import { goto } from "$app/navigation";

export const load = async ({ locals }) => {
	return {
		session_id: locals.session_id
	}
}

export const actions: Actions = {
	logout: async (event) => {
		event.cookies.delete('session_id', { path: '/' })
		event.locals.session_id = null;
	}
}
