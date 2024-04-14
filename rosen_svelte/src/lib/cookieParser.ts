export default function CookieJsoner(cookie: String)
{
  let jsonArray: any[] = [];
  let cookieArray = cookie.split('; ')
  cookieArray.forEach(e => {
    let name = e.match(/.*(?=\=)/)
    let value = e.match(/(?<=\=).*/)
    jsonArray.push(
      `"${name}": "${value}"`
    )
  })
  return JSON.parse("{"+jsonArray.toString()+"}")
}
