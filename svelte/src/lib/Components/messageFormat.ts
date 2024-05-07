function defaultMessage(message: string, status: number)
{
  return `
  <div class='flex flex-col'>
    <p class='font-bold'>${message}</p>
    <p>Status: ${status}</p>
  </div>`
}

export { defaultMessage }
