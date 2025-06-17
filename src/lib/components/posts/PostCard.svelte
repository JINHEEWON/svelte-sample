<script>
  export let post = { 
    id: 1,
    title: '샘플 게시글', 
    content: '내용', 
    author: '홍길동',
    createdAt: '2024-03-15',
    category: '일반'
  };
</script>

<div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
  <div class="flex items-start justify-between">
    <div>
      <span class="inline-block px-2 py-1 text-xs font-medium bg-violet-100 text-violet-800 rounded-full mb-2">{post.category}</span>
      <h3 class="font-semibold text-lg text-gray-900 hover:text-violet-700">
        <a href={`/posts/${post.id}`}>{post.title}</a>
      </h3>
    </div>
  </div>
  <p class="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
  <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
    <div class="flex items-center gap-2">
      <span class="font-medium">{post.author}</span>
    </div>
    <span>{post.createdAt}</span>
  </div>
</div> 