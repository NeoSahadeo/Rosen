<script>
    export let post;
    const subrosenPicSize = '2.1rem';
    const iconSize = '1.3rem'
</script>
<style>
    button {
        background-color: transparent;
        padding: 0.4rem 0.4rem;
    }
    button:hover {
        box-shadow: none;
    }
    .icons {
        filter: invert(100%);
    }
    .count {
        margin-left: 0.4rem;
    }
</style>
<div class="md:mr-44 mr-4 rounded-lg p-4 my-4" style="background-color: #131313;">
    <div class="flex flex-row items-center mb-5">
        <img src="{post.images[0]}" alt={post.title} style="width: {subrosenPicSize}; height: {subrosenPicSize};" class="object-contain subRosenProfile border-solid border-2 rounded-full">
        <a class="text-bold ml-3" href='/subrosen/uid'>
            r/{post.title}
        </a>
        <img src="/dot-operator.png" alt="" class="mx-3">
        <!--Last updated -->
        <span class="text-xs text-gray-400">
            {post.rating} days
        </span>
        <button class="ml-auto">
            <img alt="Menu" style="width: {iconSize}; height: {iconSize};" src="/icones-bags-svg/PhDotsThreeOutlineFill.svg" class="icons">
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
                <button>
                    <img alt="Down vote" style="width: {iconSize}; height: {iconSize};" src="/icones-bags-svg/bx-downvote.svg" class="icons">
                </button>
                <button>
                    <img alt="Up vote" style="width: {iconSize}; height: {iconSize};" src="/icones-bags-svg/bx-upvote.svg" class="icons">
                </button>
                <p class="count">0</p>
            </div>
            <div class="flex flex-row items-center ml-10">
                <button>
                    <img alt="Comments" style="width: {iconSize}; height: {iconSize};" src="/icones-bags-svg/uil-comments-alt.svg" class="icons">
                </button>
                <p class="count">0</p>
            </div>
            <div class="ml-auto">
                <button>
                    <img alt="Share" style="width: {iconSize}; height: {iconSize};" src="/icones-bags-svg/material-symbols-share.svg" class="icons">
                </button>
            </div>
        </div>
    </div>
</div>