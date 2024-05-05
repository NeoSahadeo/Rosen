'use client';
import {
  TextInput,
  PasswordInput,
  Button
} from '@mantine/core';
import { useState } from 'react';
import {FormEvent} from 'react';
import axios from 'axios';

export default function Login()
{
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: FormEvent) => {
      
  }

  return (
    <div>
      <h1>Welcome Back!</h1>
      <h2>Log In</h2>
      <form>
	<TextInput onInput={(e)=>{setUsernameOrEmail(e.currentTarget.value)}} id='username_or_email' variant="filled" radius="xs" label="Username or Email" withAsterisk placeholder="Enter username or email" required/>
	<PasswordInput onInput={(e)=>{setPassword(e.currentTarget.value)}} radius="xs" label="Password" withAsterisk placeholder="Input placeholder" required/>
	<Button type='submit'>Log In</Button>
      </form>
    </div>
  );
}
