<script>
    export let data;
    import Form from '$lib/components/Form.svelte';
    const profileSize = "10rem";
</script>
<div class="border-gray-700 border-2 px-4 py-2 rounded-lg">
    <h1 class=" text-sm mb-2 font-bold">Profile Preview</h1>
    <div class="flex flex-row items-center">
        <img src={data.image} class="object-cover rounded-full" style="width: {profileSize}; height: {profileSize};" alt="{data.username} profile photo">
        <div class="flex flex-col items-start h-full ml-4 text-nowrap">
        <span>
            Username: <span class="font-bold">{data.response.username}</span>
        </span>
        <span>
            Email: <span class="font-bold">{data.response.email}</span>
        </span>
        </div>
    </div>
</div>
<Form>
    <input type="hidden" value="{data.sessionid}" name="sessionid">
    <input type="file" name="image" accept="image/png, image/gif, image/jpeg, image/svg">
    <label for="username">Username:</label>
    <input type="text" value="{data.username}" name="username" id="username">
    <input type="submit" value="Update Profile" class="button-primary max-w-min">
</Form>