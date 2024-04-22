import { redirect } from "@sveltejs/kit";
import type {PageServerLoad} from "./account/login/$types";
import { messages } from "$lib/stores";

// Main Entry Point for all pages.
export const load: PageServerLoad = async ({cookies, url}) =>
{
  let allowedAnonymousPath = [
    '/account/signup',
    '/account/login',
    '/']
  let hideNav = [
    '/',
    '/account/profile',
  ]
  let sessionid = cookies.get('sessionid')

  // Check session id against server every refresh
  // Invalidate session if sessionid is none [status=401.HTTP_401_UNAUTHORIZED]
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
      cookies.delete('sessionid', { path: '/' })
      sessionid = null
    }
  }

  // Redirect if user is not logged in
  if (!sessionid &&
     !allowedAnonymousPath.includes(url.pathname))
  {
    redirect(308, '/');
  }

  // Clean messages
  messages.reset();

  // Always return Session ID and whether or
  // not the nav is hidden on the page.
  return {
    sessionid,
    hideNav,
  }
}