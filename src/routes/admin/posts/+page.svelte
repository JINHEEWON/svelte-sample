<script>
  // 실제 데이터는 API 연동 필요
  let posts = [
    { id: 1, title: '게시글1', author: '홍길동', status: 'PUBLISHED' },
    { id: 2, title: '게시글2', author: '김철수', status: 'DRAFT' }
  ];
  let filter = '';
</script>

<div class="max-w-2xl mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">컨텐츠 관리</h1>
  <table class="min-w-full border text-sm">
    <thead>
      <tr>
        <th class="border px-2 py-1">제목</th>
        <th class="border px-2 py-1">상태</th>
      </tr>
    </thead>
    <tbody>
      {#each posts as post}
        <tr>
          <td class="border px-2 py-1">{post.title}</td>
          <td class="border px-2 py-1">{post.status}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div> 