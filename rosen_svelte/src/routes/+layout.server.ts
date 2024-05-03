import { redirect } from "@sveltejs/kit";
import type {PageServerLoad} from "./account/login/$types";
import { messages } from "$lib/stores";
import { LoadProfile } from "$lib/api";

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
  let session_id = cookies.get('session_id'), 
  user_data, message;

  // Check session id against server every refresh
  // Invalidate session if session_id is none [status=401.HTTP_401_UNAUTHORIZED]
  if (session_id)
  {
    const formData = new FormData()
    formData.append("session_id", session_id)
    const response = await fetch( 'http://127.0.0.1:8000/validatesession/', { method: "POST", body: formData })
    const responseJson = await response.json()
    if (!response.ok)
    {
      cookies.delete('session_id', { path: '/' })
      session_id = null
    }
    else
    {
      // Return user data *PRIVATE*
      user_data = responseJson.content.data
      message = responseJson.message
    }
  }

  // Redirect if user is not logged in
  if (!session_id &&
     !allowedAnonymousPath.includes(url.pathname))
  {
    redirect(308, '/');
  }

  // Clean messages
  messages.reset();

  const returnResponse = {
    session_id,
    hideNav,
    user_data,
    message
  }

  return returnResponse
}