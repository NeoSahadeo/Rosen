import * as React from 'react';
import { 
  Button,
  TextField,
  Link as MaterialLink,
  OutlinedInput,
} from '@mui/material';
import Link from 'next/link';

export default function LoginPage()
{
  return (
    <main className='flex flex-col w-full h-full px-4 pt-5 items-center'>
      <form className='flex flex-col w-full py-4 px-4 items-center'>
	<h1 className='text-4xl'>Log In</h1>
	<TextField className='text-white bg-white rounded w-full mt-4' id='username_or_email' variant='filled' label='Username or Email' />
	<TextField className='bg-white rounded text-black w-full mt-4' id='password' variant='filled' label='Password' type='password' />
	<Button variant='contained' className='w-min text-nowrap mt-10'>Log In</Button>
      </form>
      <p className='mt-5'>Don't Have an Account? <Link href='/user/create/signup'><MaterialLink>Sign Up</MaterialLink></Link></p>
    </main>
  )
}
