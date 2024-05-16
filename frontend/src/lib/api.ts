import { urls } from "./constants";
import { logout } from './stores';
import { goto } from '$app/navigation';

async function validateSession(session_id: string): Promise<boolean | undefined> {
	try {
		const response = await fetch(urls.validateSession, {
			method: 'post',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ session_id })
		})
		if (response.ok) {
			return true
		}
		return false
	}
	catch {
		return undefined
	}
}

async function fetchUserPrivate(session_id: string): Promise<any> {
	try {
		if (session_id) {
			const response = await fetch(urls.fetchProfile, {
				method: 'post',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ session_id })
			})
			if (response.ok) {
				const data = await response.json()
				return data
			}
		}
	}
	catch {
	}
}

function logoutFunction() {
	logout.set(true);
	goto('/');
}

export { validateSession, fetchUserPrivate, logoutFunction }
