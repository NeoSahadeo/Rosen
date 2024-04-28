import type { Message } from '$lib/interfaces';
import messages from '$lib/messages.json';
import { updateProfileURL } from '$lib/urls.js';
import { LoadProfile } from '$lib/api.js';

export const load = async ({ parent }) => {
    const { sessionid } = await parent();
    const response = await LoadProfile(sessionid)
    return {
      response
    }
}

export const actions = {
  default: async ({ cookies, request }): Promise<Message> =>{
    const formData = await request.formData()
    try
    {
      const response = await fetch(updateProfileURL, { method: 'post', body: formData })
      if (response.ok) 
      {
        return {
          message: messages.profile_update_success,
          status: response.status
        }
      }
      return {
        message: messages.profile_update_failed,
        status: response.status
      }
    }
    catch (err)
    {
      return {
        message: messages.server_con_failed,
        status: 444
      }
    }
  }
}