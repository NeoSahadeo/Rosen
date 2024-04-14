export function load({ params }: {params: any})
{
  console.log(params.post_id)
  return {
    params: params
  }
}
