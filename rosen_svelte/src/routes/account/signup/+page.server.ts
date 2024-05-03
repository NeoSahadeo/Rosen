import { loginURL, signupURL } from '$lib/urls';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import type { Message } from '$lib/interfaces';
import { Login } from '$lib/api';
import messages from '$lib/messages.json';

export const load: PageServerLoad = async({ cookies }) =>
{
  if(cookies.get('session_id'))
  {
    redirect(302, '/feed/latest/');
  }
}

export const actions = {
  default: async({ cookies, request }): Promise<Message> => {
    const formData = await request.formData()
    const username = formData.get('username')
    const password = formData.get('password')
    try
    {
      const response = await fetch(signupURL, { method: 'post', body: formData });
      if (response.ok)
      {
        const loginForm = new FormData();
        loginForm.append("username_email", username!)
        loginForm.append("password", password!)

        const loginResponse = await Login(loginURL, { method: 'post', body: loginForm }, cookies);
        return {
          message: messages.sign_up_successfull,
          status: response.status,
        }

      }
      else
      {
        let message = await response.json()
        return ({
          message: message[0],
          status: response.status
        })
      }
    }
    catch (error)
    {
      return({
          message: messages.server_con_failed,
          status: 444,
      })
    }
  }
}
