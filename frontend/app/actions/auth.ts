'use server';
import axios from "axios";
import {FormEvent} from "react";

async function login(event: FormEvent<HTMLFormElement>)
{
  event.preventDefault()
  console.log(event.currentTarget)
  // axios.post('http://127.0.0.1:8000/login/', {
  //   body: formData
  // })
}

export { login }
