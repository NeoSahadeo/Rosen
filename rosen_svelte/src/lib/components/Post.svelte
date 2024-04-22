<script>
    import { Icon } from "$lib/api";
    export let post;
    const subrosenPicSize = '2.1rem',
    iconSize = '1.3rem';
</script>
<style>
    .count {
        margin-left: 0.4rem;
    }
</style>
<div class="rounded-lg p-4 my-4" style="background-color: #131313; --iconSize:{iconSize};">
    <div class="flex flex-row items-center mb-5">
        <img src="{post.images[0]}" alt={post.title} style="width: {subrosenPicSize}; height: {subrosenPicSize};" class="object-contain subRosenProfile border-solid border-2 rounded-full">
        <a class="text-bold ml-3" href='/subrosen/uid'>
            r/{post.title}
        </a>
        <div style="width: 2rem;">
            {@html Icon('dot')}
        </div>
        <!--Last updated -->
        <span class="text-xs text-gray-400">
            {post.rating} days
        </span>
        <button class="ml-auto iconSize">
            {@html Icon('3-dots-h')}
        </button>
    </div>
    <div class="flex flex-col">
        <div class="font-bold mb-2">{post.title}</div>
        <div class="max-h-28 overflow-hidden text-wrap shadow-lg flex flex-col">
            <span class="max-h-20 hover:cursor-pointer">
                <a href="/local">
                </a>
            </span>
            <span class="max-h-10" style="background: rgb(0,0,0); background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(19,19,19,0.7223515871192228) 43%, rgba(19,19,19,1) 100%);"></span>
        </div>
        <div class="flex flex-row pt-4 items-center">
            <div class="flex flex-row items-center">
                <button class="iconSize">
                    {@html Icon('downvote')}
                </button>
                <button class="iconSize">
                    {@html Icon('upvote')}
                </button>
                <p class="count">0</p>
            </div>
            <div class="flex flex-row items-center ml-10">
                <button class="iconSize">
                    {@html Icon('comments')}
                </button>
                <p class="count">0</p>
            </div>
            <div class="ml-auto">
                <button class="iconSize">
                    {@html Icon('share')}
                </button>
            </div>
        </div>
    </div>
</div>