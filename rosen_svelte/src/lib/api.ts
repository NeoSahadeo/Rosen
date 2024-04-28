import icons from "./icons";
import { fetchProfileURL, basePath } from "./urls";
import type { Message } from '$lib/interfaces';

const Login = async (URL: string, headers, cookies): Promise<{login: boolean, status: number}> => {
  try
  {
    const response = await fetch(URL, headers);
    if (response.ok)
    {
      let responseJson = CookieJsoner(response.headers.getSetCookie()[0])
      // Set path = Path because sveltekit path is case sens.
      responseJson['path'] = responseJson['Path']
      cookies.set('sessionid', responseJson['sessionid'], responseJson)      
      return {login: true, status: response.status}
    }
    return {login: false, status: response.status}
  }
  catch (error)
  {
    return {login: false, status: 444}
  }
}

const CookieJsoner = (cookie: String): JSON =>
{
  let jsonArray: string[] = [];
  let cookieArray = cookie.split('; ')
  cookieArray.forEach(e => {
    let name = e.match(/.*(?=\=)/)
    let value = e.match(/(?<=\=).*/)
    if (name && value)
    {
      jsonArray.push(`"${name}": "${value}"`)
    }
  })
  return JSON.parse(`{${jsonArray.toString()}}`)
}

const Icon = (name: string) => {
  return (icons.find(element => element.name === name)?.svg)

}

const LoadProfile = async (sessionid: string): Promise<Message> => {
  const response = await fetch(fetchProfileURL, { method: 'post', body: sessionid})
  if (response.ok)
  {
    const body = await response.json()
    const image_url = `${basePath}${body.image}`
    return {
      message: 'Loaded Profile',
      status: response.status,
      image: image_url,
      username: body.username,
      email: body.email,
    }
  }
  return {
    message: 'Trouble loading profile',
    status: response.status
  }
}

export { 
  CookieJsoner,
  Login,
  Icon,
  LoadProfile,
}