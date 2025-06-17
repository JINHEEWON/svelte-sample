<script>
  let stats = {
    totalUsers: 150,
    activeUsers: 120,
    totalPosts: 450,
    totalFiles: 230,
    storageUsed: '2.5GB',
    storageLimit: '10GB'
  };

  let recentActivities = [
    {
      id: 1,
      type: '사용자',
      action: '가입',
      target: '김영희',
      timestamp: '2024-03-15 15:30'
    },
    {
      id: 2,
      type: '게시글',
      action: '작성',
      target: 'SvelteKit으로 시작하는 웹 개발',
      timestamp: '2024-03-15 14:20'
    },
    {
      id: 3,
      type: '파일',
      action: '업로드',
      target: '프로젝트_발표자료.pdf',
      timestamp: '2024-03-15 13:45'
    }
  ];

  let systemStatus = {
    cpu: 35,
    memory: 60,
    disk: 45,
    network: 25
  };
</script>

<div class="p-6">
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-bold text-gray-900">관리자 대시보드</h1>
  </div>

  <!-- Stats Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    <!-- Users Stats -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold">사용자</h2>
        <svg class="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="text-3xl font-bold text-gray-900">{stats.totalUsers}</div>
          <div class="text-sm text-gray-500">전체</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-green-600">{stats.activeUsers}</div>
          <div class="text-sm text-gray-500">활성</div>
        </div>
      </div>
    </div>

    <!-- Content Stats -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold">콘텐츠</h2>
        <svg class="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="text-3xl font-bold text-gray-900">{stats.totalPosts}</div>
          <div class="text-sm text-gray-500">게시글</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-gray-900">{stats.totalFiles}</div>
          <div class="text-sm text-gray-500">파일</div>
        </div>
      </div>
    </div>

    <!-- Storage Stats -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold">스토리지</h2>
        <svg class="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      </div>
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span class="text-gray-500">사용량</span>
          <span class="font-medium">{stats.storageUsed} / {stats.storageLimit}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-violet-600 h-2 rounded-full" style="width: 25%"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Recent Activities -->
    <div class="lg:col-span-2">
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-lg font-semibold mb-4">최근 활동</h2>
        <div class="space-y-4">
          {#each recentActivities as activity}
            <div class="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
              <div class="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                {#if activity.type === '사용자'}
                  <svg class="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                {:else if activity.type === '게시글'}
                  <svg class="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0012.586 3H12m7 17a2 2 0 01-2-2V9.5a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0012.586 3H12" />
                  </svg>
                {:else}
                  <svg class="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                {/if}
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="font-medium text-gray-900">{activity.target}</span>
                  <span class="text-sm text-gray-500">· {activity.action}</span>
                </div>
                <div class="text-sm text-gray-500">{activity.timestamp}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- System Status -->
    <div class="lg:col-span-1">
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-lg font-semibold mb-4">시스템 상태</h2>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-gray-500">CPU</span>
              <span class="font-medium">{systemStatus.cpu}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-violet-600 h-2 rounded-full" style="width: {systemStatus.cpu}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-gray-500">메모리</span>
              <span class="font-medium">{systemStatus.memory}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-violet-600 h-2 rounded-full" style="width: {systemStatus.memory}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-gray-500">디스크</span>
              <span class="font-medium">{systemStatus.disk}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-violet-600 h-2 rounded-full" style="width: {systemStatus.disk}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-gray-500">네트워크</span>
              <span class="font-medium">{systemStatus.network}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-violet-600 h-2 rounded-full" style="width: {systemStatus.network}%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="max-w-2xl mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">관리자 페이지</h1>
  <ul class="list-disc ml-6 space-y-2">
    <li><a href="/admin/users" class="text-blue-600 hover:underline">사용자 관리</a></li>
    <li><a href="/admin/posts" class="text-blue-600 hover:underline">컨텐츠 관리</a></li>
    <li><a href="/admin/files" class="text-blue-600 hover:underline">파일 관리</a></li>
    <li><a href="/admin/system" class="text-blue-600 hover:underline">시스템 관리</a></li>
    <li><a href="/admin/tools" class="text-blue-600 hover:underline">관리자 도구</a></li>
  </ul>
</div>

<h1>관리자 대시보드</h1>
<nav>
  <ul>
    <li><a href="/admin/users">👥 사용자 관리</a></li>
    <li><a href="/admin/posts">📝 컨텐츠 관리</a></li>
    <li><a href="/admin/files">📁 파일 관리</a></li>
    <li><a href="/admin/system">📊 시스템 관리</a></li>
    <li><a href="/admin/tools">🛠️ 관리자 도구</a></li>
  </ul>
</nav>
<section>
  <h2>관리자 주요 현황</h2>
  <p>회원/게시글/파일/시스템 통계 등 (API 연동 필요)</p>
</section> 