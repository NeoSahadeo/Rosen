'use server';
import axios from "axios";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {FormEvent} from "react";

async function login(formData: FormData)
{
  await axios.postForm('http://127.0.0.1:8000/login/', formData)
  .then((response)=>{
    if (response.status === 202)
      {
	const data = response.data.data
	cookies().set('session_id', data.session_id)
	redirect('/latest')
      }
  })
  .catch((error)=>{
    console.log(error)
  })
}

export { login }
