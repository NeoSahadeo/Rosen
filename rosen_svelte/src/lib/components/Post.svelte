<script>
    export let post;
    const subrosenPicSize = '2.1rem';
</script>
<div>
    <div>
        <span class="flex flex-row items-center">
            <img src="{post.images[0]}" alt={post.title} style="width: {subrosenPicSize}; height: {subrosenPicSize};" class="object-contain subRosenProfile border-solid border-2 rounded-full">
            <a class="text-bold ml-3" href='/subrosen/uid'>
                r/{post.title}
            </a>
            <img src="/dot-operator.png" alt="" class="mx-3">
            <!--Last updated -->
            <span class="text-sm text-gray-500">
                {post.rating} days
            </span>
        </span>
    </div>
</div>