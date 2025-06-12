<script>
  import PostList from '$lib/components/posts/PostList.svelte';
  // 게시글 목록, 검색 등은 API 연동 필요(추후 구현)
  let posts = [
    { id: 1, title: '샘플 게시글 1', author: '홍길동', createdAt: '2024-06-12' },
    { id: 2, title: '샘플 게시글 2', author: '김철수', createdAt: '2024-06-11' }
  ];
  let search = '';
</script>

<div class="max-w-2xl mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">게시글 목록</h1>
  <input class="border rounded px-3 py-2 w-full mb-4" placeholder="검색어 입력" bind:value={search} />
  <PostList posts={posts.filter(p => p.title.includes(search))} />
</div>

<a href="/posts/create">➕ 새 글 작성</a> 