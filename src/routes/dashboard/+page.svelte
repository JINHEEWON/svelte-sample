<script>
  // 실제 데이터는 API 연동 필요, 샘플 데이터
  let user = { name: '홍길동' };
  let stats = { posts: 3, files: 2 };
  let recentPosts = [
    { id: 1, title: 'SvelteKit 도입 후기', author: '홍길동', createdAt: '2024-06-12' },
    { id: 2, title: 'Spring Boot 파일 업로드 전략', author: '김철수', createdAt: '2024-06-11' }
  ];
  let recentFiles = [
    { id: 1, name: 'sample1.pdf', size: '1MB', uploadedAt: '2024-06-12' },
    { id: 2, name: 'sample2.jpg', size: '2MB', uploadedAt: '2024-06-11' }
  ];
  let activities = [
    { user: 'John Doe', action: '게시글 "SvelteKit 도입 후기" 작성', time: '10분 전' },
    { user: '홍길동', action: '파일 "sample1.pdf" 업로드', time: '1시간 전' },
    { user: '관리자', action: '공지사항 등록', time: '3시간 전' }
  ];
</script>

<div class="max-w-2xl mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">{user.name}님, 환영합니다!</h1>
  <div class="mb-6 grid grid-cols-2 gap-4">
    <div class="bg-blue-50 p-4 rounded">
      <div class="text-sm text-gray-500">작성한 게시글</div>
      <div class="text-2xl font-bold">{stats.posts}</div>
    </div>
    <div class="bg-green-50 p-4 rounded">
      <div class="text-sm text-gray-500">업로드한 파일</div>
      <div class="text-2xl font-bold">{stats.files}</div>
    </div>
  </div>
  <div class="mb-6">
    <h2 class="text-lg font-semibold mb-2">바로가기</h2>
    <div class="flex gap-4">
      <a href="/posts/create" class="px-4 py-2 bg-blue-600 text-white rounded">새 게시글</a>
      <a href="/files" class="px-4 py-2 bg-green-600 text-white rounded">파일 업로드</a>
      <a href="/users" class="px-4 py-2 bg-gray-600 text-white rounded">내 프로필</a>
    </div>
  </div>
  <div class="bg-yellow-50 p-4 rounded">
    <h2 class="font-semibold mb-1">공지사항</h2>
    <p class="text-sm text-gray-700">서비스가 곧 정식 오픈됩니다!</p>
  </div>
</div>

<h1 class="text-2xl font-bold mb-6">대시보드</h1>
<div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
  <!-- 주요 통계 카드 -->
  <section class="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
    <div class="bg-white rounded-xl shadow p-4 flex flex-col items-start">
      <div class="text-violet-600 text-2xl mb-2">👥</div>
      <div class="font-semibold">전체 회원</div>
      <div class="text-lg font-bold">{stats.totalUsers}</div>
      <div class="text-xs text-gray-500">오늘 가입 {stats.newUsersToday}</div>
    </div>
    <div class="bg-white rounded-xl shadow p-4 flex flex-col items-start">
      <div class="text-violet-600 text-2xl mb-2">📝</div>
      <div class="font-semibold">전체 게시글</div>
      <div class="text-lg font-bold">{stats.totalPosts}</div>
      <div class="text-xs text-gray-500">오늘 등록 {stats.postsToday}</div>
    </div>
    <div class="bg-white rounded-xl shadow p-4 flex flex-col items-start">
      <div class="text-violet-600 text-2xl mb-2">📁</div>
      <div class="font-semibold">전체 파일</div>
      <div class="text-lg font-bold">{stats.totalFiles}</div>
      <div class="text-xs text-gray-500">저장소 {stats.totalStorage}</div>
    </div>
    <div class="bg-white rounded-xl shadow p-4 flex flex-col items-start">
      <div class="text-violet-600 text-2xl mb-2">📊</div>
      <div class="font-semibold">스토리지 사용률</div>
      <div class="text-lg font-bold">{stats.storageUsage}%</div>
      <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div class="bg-violet-600 h-2 rounded-full" style={`width: ${stats.storageUsage}%`}></div>
      </div>
    </div>
  </section>
  <!-- 바로가기 -->
  <section class="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
    <h2 class="font-semibold text-lg mb-4">바로가기</h2>
    <div class="flex flex-col gap-2">
      <a href="/posts/create" class="text-violet-600 hover:underline">➕ 새 게시글 작성</a>
      <a href="/files" class="text-violet-600 hover:underline">⬆️ 파일 업로드</a>
      <a href="/users/1" class="text-violet-600 hover:underline">👤 내 프로필</a>
    </div>
  </section>
</div>
<div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
  <!-- 최근 게시글 -->
  <section class="bg-white rounded-xl shadow p-6">
    <h2 class="font-semibold text-lg mb-4">최근 게시글</h2>
    <ul class="space-y-2">
      {#each recentPosts as post}
        <li>
          <a href={`/posts/${post.id}`} class="font-semibold text-violet-700 hover:underline">{post.title}</a>
          <span class="text-xs text-gray-500 ml-2">{post.author} | {post.createdAt}</span>
        </li>
      {/each}
    </ul>
  </section>
  <!-- 최근 파일 -->
  <section class="bg-white rounded-xl shadow p-6">
    <h2 class="font-semibold text-lg mb-4">최근 파일</h2>
    <ul class="space-y-2">
      {#each recentFiles as file}
        <li>
          <span class="font-semibold text-violet-700">{file.name}</span>
          <span class="text-xs text-gray-500 ml-2">{file.size} | {file.uploadedAt}</span>
        </li>
      {/each}
    </ul>
  </section>
  <!-- 최근 활동 -->
  <section class="bg-white rounded-xl shadow p-6">
    <h2 class="font-semibold text-lg mb-4">최근 활동</h2>
    <ul class="space-y-2">
      {#each activities as a}
        <li>
          <span class="font-semibold text-violet-700">{a.user}</span> {a.action}
          <span class="text-xs text-gray-400 ml-2">{a.time}</span>
        </li>
      {/each}
    </ul>
  </section>
</div>

<h1>대시보드</h1>
<p>환영합니다, {user.name}님!</p>
<section>
  <h2>내 활동 요약</h2>
  <ul>
    <li>작성한 게시글: {user.postCount}</li>
    <li>업로드한 파일: {user.fileCount}</li>
    <li>최근 활동 내역: (추후 구현)</li>
  </ul>
</section>
<section>
  <h2>바로가기</h2>
  <a href="/posts/create">➕ 새 게시글 작성</a> |
  <a href="/files">⬆️ 파일 업로드</a> |
  <a href="/users/1">내 프로필</a>
</section>
<section>
  <h2>공지사항/뉴스피드</h2>
  <p>공지사항 및 뉴스피드가 여기에 표시됩니다. (API 연동 필요)</p>
</section> 