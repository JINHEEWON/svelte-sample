<script>
  import PostCard from './PostCard.svelte';
  export let posts = [{ title: '샘플1', content: '내용1', author: '홍길동' }];
</script>
<div class="grid gap-4">
  {#each posts as post}
    <PostCard {post} />
  {/each}
</div> 