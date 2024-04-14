import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import type { FetchClientMessage } from '$lib/interfaces';
import CookieJsoner from '$lib/cookieParser.js'
import { loginURL } from '$lib/urls';

export const load: PageServerLoad = async({ cookies }) =>
{
  if(cookies.get('sessionid'))
  {
    redirect(302, '/feed/latest/');
  }
}

export const actions = {
  default: async ({ cookies, request }): Promise<FetchClientMessage> =>
  {
    const formData = await request.formData()

    try
    {
      const response = await fetch(loginURL, { method: 'post', body: formData });
      if (response.ok) 
      {
        // Index 1 because the first index is a CSRF token
        let sessionJson = CookieJsoner(response.headers.getSetCookie()[1])
        cookies.set( 'sessionid', sessionJson['sessionid'], { 
          maxAge: parseInt(sessionJson['Max-Age']), 
          path: sessionJson['Path'] 
        })
        return ({
          display: true,
          message: 'Login in successful',
          status: response.status,
          redirect: '/feed/latest/'
        })
      }
      else
      {
        return ({
          display: true,
          message: 'Credentials are incorrect or user does not exist',
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
