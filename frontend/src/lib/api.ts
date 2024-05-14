import { urls } from "./constants";

async function validateSession(session_id: string): Promise<boolean | undefined> {
	try {
		const formData = new FormData()
		formData.set('session_id', session_id)
		const response = await fetch('http://127.0.0.1:8000/validatesession/', {
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

export { validateSession }
