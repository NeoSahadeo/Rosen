import type { Actions } from './$types';
import type { Message } from '$lib/interfaces';
import { defaultMessage } from '$lib/Components/messageFormat';

export const actions = {
  default: async ({cookies, request}): Promise<Omit<Message, 'id'>> => {
    const formData = await request.formData()
    try
    {
      const response = await fetch(
	'http://127.0.0.1:8000/login/', {
	method: 'post',
	body: formData
      })
      const data = await response.json()
      if (response.ok)
      {
	console.log(data)
	cookies.set('session_id', data.data.session_id, {
	  path: '/',
	  expires: data._session_expiry,
	  httpOnly: true,
	  secure: true,
	})
	return {
	  message: defaultMessage(data.message, response.status),
	  classes: 'variant-filled-success',
	}
      }
      return {
	message: defaultMessage(data.message, response.status),
	classes: 'variant-filled-warning',
      }
    }
    catch (error)
    {
      return {
	message: defaultMessage('Svelte Server Error', 500),
	classes: 'variant-filled-error',
      }
    }
  },
} satisfies Actions;
