export const load = async({ cookies, fetch, setHeaders }) =>
{
  const response = await fetch('https://dummyjson.com/products?limit=4')
  if (response.ok)
  {
    let posts = await response.json();
    posts = posts.products
    return {posts}
  }
}
