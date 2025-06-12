<script>
  // 실제로는 load 함수로 API에서 게시글 상세를 받아와야 함
  export let params;
  let post = {
    id: params.id,
    title: `샘플 게시글 ${params.id}`,
    content: '이곳에 게시글 내용이 표시됩니다.',
    author: '홍길동',
    createdAt: '2024-06-12',
    files: []
  };
</script>

<div class="max-w-2xl mx-auto py-12">
  <h1 class="text-2xl font-bold mb-2">{post.title}</h1>
  <div class="text-gray-500 mb-4">작성자: {post.author}</div>
  <div class="mb-6">{post.content}</div>
  <div class="mb-4">
    <h2 class="font-semibold">첨부파일</h2>
    <ul class="list-disc ml-6">
      {#each post.files as file}
        <li>{file.name}</li>
      {/each}
    </ul>
  </div>
  <div class="flex gap-2">
    <a href="edit" class="px-4 py-2 bg-blue-600 text-white rounded">수정</a>
    <button class="px-4 py-2 bg-red-600 text-white rounded">삭제</button>
  </div>
</div>

<a href="/posts">← 목록으로</a> 