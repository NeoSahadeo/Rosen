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
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    const autologin = formData.get('autologin')

    const formReq = new FormData()
    formReq.append("username", username)
    formReq.append("email", email)
    formReq.append("password", password)

    try {
      const response = await fetch("http://127.0.0.1:8000/signup/", {
        method: "POST",
        body: formReq,
      });

      if (response.ok)
      { 
        if (autologin)
        {
          const loginFormReq = new FormData();
          loginFormReq.append("username_email", username)
          loginFormReq.append("password", password)

          try 
          {
            const loginResponse = await fetch("http://127.0.0.1:8000/login/", {
              method: "POST",
              body: loginFormReq,
            });

            if (loginResponse.ok)
            { 
              // let csrfJson = CookieJsoner(response.headers.getSetCookie()[0])
              let sessionJson = CookieJsoner(loginResponse.headers.getSetCookie()[1])
              cookies.set('sessionid', sessionJson['sessionid'], {
                maxAge: parseInt(sessionJson['Max-Age']),
                path: sessionJson['Path']
              })
            }
          } 
          catch (e)
          {
            console.error(e);
          }
        }

        return {
          success: true,
          status: response.status,
          message: "Sign Up Succeeded",
        }
      }
      return {
        success: false,
        status: response.status,
        message: "Sign Up Failed",
      }
    } 
    catch (e)
    {
      console.error(e);
    }
  }
}
