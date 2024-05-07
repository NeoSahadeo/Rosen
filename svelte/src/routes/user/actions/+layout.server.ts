import { redirect } from '@sveltejs/kit';
import urls from '$lib/urls';

export const load = ({ cookies }) => {
  const session_id = cookies.get('session_id');
  if (session_id)
  {
    redirect(307, urls.latest)
  }
}
