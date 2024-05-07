import { redirect } from '@sveltejs/kit';

export const load = ({ cookies }) => {
  const session_id = cookies.get('session_id');
  if (session_id)
  {
    redirect(307, '/latest/')
  }
}
