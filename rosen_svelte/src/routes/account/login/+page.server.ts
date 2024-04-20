import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { Login } from '$lib/api';
import { loginURL } from '$lib/urls';
import type { Message } from '$lib/interfaces';
import messages from '$lib/messages.json';

export const load: PageServerLoad = ({ cookies }) => {
  if (cookies.get('sessionid')) {
    redirect(302, '/feed/latest/');
  }
}
  
export const actions = {
  default: async ({ cookies, request }): Promise<Message> =>{
    const formData = await request.formData()

    const response = await Login(loginURL, { method: 'post', body: formData }, cookies)
    if (response.login)
    {
      return {
        message: messages.log_in_successfull,
        status: response.status,
      }
    }
    else
    {
      if (response.status === 444)
      {
        return {
          message: messages.server_con_failed,
          status: response.status
        }
      }
      return {
        message: messages.log_in_failed,
        status: response.status
      }
    }
  }
}
