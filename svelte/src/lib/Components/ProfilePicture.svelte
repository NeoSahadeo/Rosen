<script lang="ts">
  import urls from '$lib/urls';
  import { session } from '$lib/stores';
  const size = '3rem';
  const imageUrl = ''.concat(urls.backend, $session.image)
</script>
<a href={urls.profile}>
  {$session.username}
  <!-- <img src={imageUrl} alt={$session.username} -->
  <!--   class='object-cover rounded-full' style="width: {size}; height: {size};" -->
  <!-- > -->
</a>
