import { fetchUserPrivate } from "$lib/api"
import { fail } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types"
import { urls } from "$lib/constants";

export const load = async ({ locals }: { locals: any }) => {
	const response = await fetchUserPrivate(locals.session_id)
	return response?.data
}

export const actions: Actions = {
	updateProfile: async ({ cookies, request }) => {
		const formData = await request.formData();
		formData.set('session_id', cookies.get('session_id'))

		const response = await fetch(urls.updateProfile, {
			method: 'patch',
			body: formData,
		})

		if (response.ok) {
			return { success: true }
		}
		return fail(response.status)
	}
}
