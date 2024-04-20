import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { loginURL, signupURL } from '$lib/urls';
import type { FetchClientMessage } from '$lib/interfaces';

export const load: PageServerLoad = async({ cookies }) =>
{
  if(cookies.get('sessionid'))
  {
    redirect(302, '/feed/latest/');
  }
}

export const actions = {
  default: async({ cookies, request }): Promise<FetchClientMessage> =>
  {
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

        const loginResponse = await fetch(loginURL, { method: 'post', body: loginForm });

        // Index 1 because the first index is a CSRF token
        let sessionJson = CookieJsoner(loginResponse.headers.getSetCookie()[1])
        cookies.set( 'sessionid', sessionJson['sessionid'], { 
          maxAge: parseInt(sessionJson['Max-Age']), 
          path: sessionJson['Path'] 
        })
        return ({
          display: true,
          message: 'Login in successful',
          status: loginResponse.status,
          redirect: '/feed/latest/'
        })
      }
      else
      {
        let message = await response.json()
        return ({
          display: true,
          message: message[0],
          status: response.status
        })
      }
    }
    catch (Error)
    {
      return({
          display: true,
          message: 'Connection to validation server failed',
          status: 444,
      })
    }
  }
}
