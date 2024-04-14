import { redirect } from '@sveltejs/kit';
import CookieJsoner from '$lib/cookieParser.js'
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async({ cookies }) =>
{
  if(cookies.get('sessionid'))
  {
    redirect(302, '/feed/latest/');
  }
}

export const actions = {
  default: async({ cookies, request }: {request: any, cookies: any}) => {
    const formData = await request.formData()
    const username_email = formData.get('username_email')
    const password = formData.get('password')

    const formReq = new FormData()
    formReq.append("username_email", username_email)
    formReq.append("password", password)

    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        body: formReq,
      });

      if (response.ok)
      { 
        // let csrfJson = CookieJsoner(response.headers.getSetCookie()[0])
        let sessionJson = CookieJsoner(response.headers.getSetCookie()[1])
        cookies.set('sessionid', sessionJson['sessionid'], {
          maxAge: parseInt(sessionJson['Max-Age']),
          path: sessionJson['Path']
        })

        return {
          success: true,
          status: response.status,
          redirect: '/feed/latest/',
        }
      }
      return {
        success: false,
        status: response.status,
      }
    } 
    catch (e)
    {
      console.error(e);
    }
  }
}
