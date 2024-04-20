import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { Login } from '$lib/api';
import { loginURL } from '$lib/urls';
import type { Message } from '$lib/interfaces';

export const load: PageServerLoad = ({ cookies }) => {
  if (cookies.get('sessionid')) {
    redirect(302, '/feed/latest/');
  }
}
  
export const actions = {
  default: async ({ cookies, request }): Promise<Message> =>{
    const formData = await request.formData()

    let response = await Login(loginURL, { method: 'post', body: formData }, cookies)
    if (response.login)
    {
      return {
        message: 'Log in successful',
        status: response.status,
      }
    }
    else
    {
      return {
        message: 'Log in failed',
        status: response.status
      }
    }
  }
}
