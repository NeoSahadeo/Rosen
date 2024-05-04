import * as React from 'react';
import { 
  Button,
  TextField,
  Link as MaterialLink,
  OutlinedInput,
} from '@mui/material';
import Link from 'next/link';

export default function SignupPage()
{
  return (
    <main className='flex flex-col w-full h-full px-4 pt-5 items-center'>
      <form className='flex flex-col w-full items-center'>
	<h1 className='text-4xl'>Sign Up</h1>
	<TextField className='text-white bg-white rounded w-full mt-4' id='username' variant='filled' label='Username' />
	<TextField className='text-white bg-white rounded w-full mt-4' id='email' variant='filled' label='Email' />
	<TextField className='bg-white rounded text-black w-full mt-4' id='password' variant='filled' label='Password' type='password' />
	<TextField className='bg-white rounded text-black w-full mt-4' id='password2' variant='filled' label='Confirm Password' type='password' />
	<Button variant='contained' className='w-min text-nowrap mt-10'>Sign Up</Button>
      </form>
      <p className='mt-5'>Already Have an Account? <Link href='/user/create/login'><MaterialLink>Log In</MaterialLink></Link></p>
    </main>
  )
}
