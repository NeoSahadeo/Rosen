import Link from "next/link"
import { 
  Button,
  Anchor
} from "@mantine/core"
import { cookies } from "next/headers"

function HomePage()
{
  const session_id = cookies().get('session_id')
  return (
    <main className='flex flex-col items-center h-screen'>
      <h1 className="sm:text-4xl text-3xl mt-4 text-cyan-500">The Rosen Project</h1>
      <p>A Reddit clone by Neo</p>
      <img src='images/Rosen1080.png' className='sm:max-w-sm max-w-80 mt-2'></img>
      <div className="flex flex-row max-w-sm w-full justify-evenly items-center px-10 mb-auto mt-4">
	<Button radius='xs' color='cyan' component={Link} href='/user/create/signup'>Sign Up</Button>
	<p>OR</p>
	<Button radius='xs' color='cyan' component={Link} href='/user/create/login'>Log In</Button>
      </div>
      <p className="mb-4">Explore the <Anchor target="_blank" href='https://github.com/NeoSahadeo/Rosen'>Rosen</Anchor> repo </p>
    </main>
  )
}

export default HomePage
