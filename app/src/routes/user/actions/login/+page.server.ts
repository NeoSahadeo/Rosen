import type { Actions } from './$types';
import type { Message } from '$lib/interfaces';

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
	return {
	  message: `<div class='flex flex-col'>
	  <p class='font-bold'>${data.message}</p>
	  <p>Status: ${response.status}</p>
	  </div>`,
	  classes: 'variant-filled-success',
	}
      }
      return {
	  message: `<div class='flex flex-col'>
	  <p class='font-bold'>${data.message}</p>
	  <p>Status: ${response.status}</p>
	  </div>`,
	classes: 'variant-filled-warning'
      }
    }
    catch (error)
    {
      return {
	message: 'Svelte Server Error',
	classes: 'variant-filled-error'
      }
    }
  },
} satisfies Actions;
