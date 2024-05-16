import { fetchUserPrivate } from "$lib/api"

export const load = async ({ locals }) => {
	const response = await fetchUserPrivate(locals.session_id)
	return response?.data
}
