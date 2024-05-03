import icons from "./icons";
import { fetchProfileURL, basePath } from "./urls";
import type { Message } from '$lib/interfaces';

const Login = async (URL: string, headers, cookies): Promise<{login: boolean, response: object, status: number}> => {
  try
  {
    const response = await fetch(URL, headers);
    const responseJson = await response.json()
    if (response.status === 202)
    {
      console.log(responseJson.content.data.path)
      cookies.set('session_id',
      responseJson.content.data.session_id,
      {path: responseJson.content.data.path})
      return {login: true, response: responseJson, status: response.status}
    }
    return {login: false, response: responseJson, status: response.status}
  }
  catch (error)
  {
    return {login: false, response: {'message': error}, status: 444}
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