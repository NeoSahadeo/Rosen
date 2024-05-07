import type { Actions } from './$types';
import type { Message } from '$lib/interfaces';
import { defaultMessage } from '$lib/Components/messageFormat';
import urls from '$lib/urls';

export const actions = {
  default: async ({cookies, request}): Promise<Omit<Message, 'id'>> => {
    const formData = await request.formData()
    try
    {
      const response = await fetch(
	urls.backendLogin, {
	method: 'post',
	body: formData
      })
      const data = await response.json()
      if (response.ok)
      {
	cookies.set('session_id', data.data.session_id, {
	  path: '/',
	  expires: data._session_expiry,
	  httpOnly: true,
	  secure: false,
	})
	return {
	  message: defaultMessage(data.message, response.status),
	  classes: 'variant-filled-success',
	  timeout: 5000,
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
