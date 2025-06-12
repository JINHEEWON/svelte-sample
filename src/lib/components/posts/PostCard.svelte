<script>
  export let post = { title: '샘플 게시글', content: '내용', author: '홍길동' };
</script>
<div class="border rounded p-4 shadow hover:shadow-lg">
  <h3 class="font-bold text-lg mb-2">{post.title}</h3>
  <p class="text-gray-600 mb-2">{post.content}</p>
  <div class="text-xs text-gray-400">작성자: {post.author}</div>
</div> 