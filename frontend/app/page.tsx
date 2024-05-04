import * as React from 'react';
import { 
  Button,
  Link as MaterialLink
} from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
  <main className='flex flex-col w-full h-full items-center pt-10'>
    <h1 className='text-3xl'>The Rosen Project</h1>
    <h2 className='text-base'>A <MaterialLink target='_blank' href='https://www.reddit.com/'>Reddit</MaterialLink> Clone</h2>
    <img src='images/Rosen1080.png' className='w-60 my-10'></img>
    <div className='flex flex-row items-center'>
      <Link href='user/create/signup'>
	<Button variant='contained'>Sign up</Button>
      </Link>
      <p className='mx-5'>or</p>
      <Link href='user/create/login'>
	<Button variant='contained'>Log in</Button>
      </Link>
    </div>
    <span className='mt-auto mb-5'>Explore the <MaterialLink target='_blank' href='https://github.com/NeoSahadeo/Rosen'>The Rosen Project</MaterialLink> repo</span>
  </main>
  );
}
