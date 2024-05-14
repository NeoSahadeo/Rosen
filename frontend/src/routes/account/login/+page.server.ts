import { fail } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types"

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();
		try {
			const response = await fetch('http://127.0.0.1:8000/login/', {
				method: 'post',
				body: formData
			})
			if (response.ok) {
				const data = await response.json()
				cookies.set('session_id', data.data.session_id, { path: '/' })
				return { success: true }
			}
			return fail(response.status)
		}
		catch {
			throw new Error('Validation Server is Offline')
		}
	}
}
