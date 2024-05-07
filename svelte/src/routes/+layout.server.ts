import { redirect } from '@sveltejs/kit'
import type { Message } from '$lib/interfaces'

const nonAuthPaths = [
  '/',
  '/user/actions/signup',
  '/user/actions/login',
]

export const load = async ({ cookies, url }): Promise<Omit<Message, 'id'> & {data?: {}}>=> {
  const session_id = cookies.get('session_id')

  if (session_id)
  {
    try
    {
      const response = await fetch('http://127.0.0.1:8000/validatesession/', {
	method: 'post',
	headers: {
	  "Content-Type": "application/json",
	},
	body: JSON.stringify({session_id})
      })
      const data = await response.json()
      if (response.ok)
      {
	return {
	  message: data.message,
	  status: response.status,
	  data: data.data
	}
      }
      return {
	message: data.message,
	status: response.status
      }
    }
    catch
    {
      return {
	message: 'Validation Server Offline',
	status: 500,
      }
    }
  }

  // Only Allow nonAuthPaths if no session_id exists
  if (!nonAuthPaths.includes(url.pathname) && !session_id){ 
    // Store previous page for QOL
    redirect(307, '/'); 
  }

  return {
    message: undefined!
  }
}
