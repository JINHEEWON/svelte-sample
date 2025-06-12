<script>
  import '../app.css';
</script>

<nav class="bg-white shadow mb-8">
  <div class="max-w-4xl mx-auto px-4">
    <div class="flex h-14 items-center justify-between">
      <div class="flex items-center gap-6">
        <a href="/" class="text-xl font-bold text-violet-700 hover:text-violet-900">대시보드</a>
        <a href="/posts" class="text-gray-700 hover:text-violet-700">게시글</a>
        <a href="/files" class="text-gray-700 hover:text-violet-700">파일</a>
        <a href="/users" class="text-gray-700 hover:text-violet-700">사용자</a>
        <a href="/admin" class="text-gray-700 hover:text-violet-700">관리자</a>
      </div>
    </div>
  </div>
</nav>

<slot /> 