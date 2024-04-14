import { redirect } from "@sveltejs/kit";
import type {PageServerLoad} from "./account/login/$types";

export const load: PageServerLoad = async ({cookies, url}) =>
{
  let allowedAnonymousPath = [
    '/account/signup',
    '/account/login',
    '/']
  let sessionid = cookies.get('sessionid')

  console.log('validation session')
  // Check session id against server every refresh
  // Invalidate session if sessionid is none
  if (sessionid)
  {
    const formData = new FormData()
    formData.append("sessionid", sessionid)
    const response = await fetch(
      'http://127.0.0.1:8000/validatesession/',
      {
        method: "POST",
        body: formData
      }
    )
    if (!response.ok)
    {
      cookies.delete('sessionid', {
        path: '/'
      })
      sessionid = null
    }
  }
  // Redirect if user is not logged in
  if (!sessionid &&
     !allowedAnonymousPath.includes(url.pathname))
  {
    redirect(308, '/');
  }
  return {
    sessionid
  }
}
