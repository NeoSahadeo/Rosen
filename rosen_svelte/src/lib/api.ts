const Login = async (URL: string, headers, cookies): Promise<{login: boolean, status: number}> => {
  try
  {
    const response = await fetch(URL, headers);
    if (response.ok)
    {
      // Index 1 because the first index is a CSRF token
      let responseJson = CookieJsoner(response.headers.getSetCookie()[1])
      // Set path = Path because sveltekit path is case sens.
      responseJson['path'] = responseJson['Path']
      // cookies.set('sessionid', responseJson['sessionid'], responseJson)      
      return {login: true, status: response.status}
    }
    return {login: false, status: response.status}
  }
  catch (Error)
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

export { 
  CookieJsoner,
  Login,
}