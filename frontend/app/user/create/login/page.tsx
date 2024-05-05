'use client';
import {
  TextInput,
  PasswordInput,
  Button
} from '@mantine/core';
import { useState } from 'react';
import {FormEvent} from 'react';
import { login } from '@/app/actions/auth';

export default function Login()
{
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData()
    formData.set('username_or_email', usernameOrEmail)
    formData.set('password', password)
    login(formData)
  }

  return (
    <div>
      <h1>Welcome Back!</h1>
      <h2>Log In</h2>
      <form onSubmit={onSubmit}>
	<TextInput onInput={(e)=>{setUsernameOrEmail(e.currentTarget.value)}} id='username_or_email' variant="filled" radius="xs" label="Username or Email" withAsterisk placeholder="Enter username or email" required/>
	<PasswordInput onInput={(e)=>{setPassword(e.currentTarget.value)}} id='password' radius="xs" label="Password" withAsterisk placeholder="Enter Password" required/>
	<Button type='submit'>Log In</Button>
      </form>
    </div>
  );
}
