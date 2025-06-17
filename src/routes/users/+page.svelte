<script>
  import SearchBox from '$lib/components/common/SearchBox.svelte';
  
  // 실제로는 API에서 사용자 목록을 받아와야 함
  let users = [
    {
      id: 1,
      name: '홍길동',
      email: 'hong@example.com',
      role: '관리자',
      status: '활성',
      lastLogin: '2024-03-15 14:30',
      createdAt: '2024-01-01'
    },
    {
      id: 2,
      name: '김철수',
      email: 'kim@example.com',
      role: '일반',
      status: '활성',
      lastLogin: '2024-03-14 16:45',
      createdAt: '2024-01-15'
    }
  ];

  let search = '';
  let selectedRole = '전체';
  let selectedStatus = '전체';
  let roles = ['전체', '관리자', '일반'];
  let statuses = ['전체', '활성', '비활성'];

  $: filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
                         user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = selectedRole === '전체' || user.role === selectedRole;
    const matchesStatus = selectedStatus === '전체' || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });
</script>

<div class="p-6">
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-bold text-gray-900">사용자</h1>
    <a 
      href="/users/invite" 
      class="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
      사용자 초대
    </a>
  </div>

  <div class="bg-white rounded-xl shadow-sm p-6">
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <div class="flex-1">
        <SearchBox 
          bind:value={search} 
          placeholder="이름 또는 이메일로 검색"
        />
      </div>
      <div class="sm:w-48">
        <select 
          bind:value={selectedRole}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400"
        >
          {#each roles as role}
            <option value={role}>{role}</option>
          {/each}
        </select>
      </div>
      <div class="sm:w-48">
        <select 
          bind:value={selectedStatus}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400"
        >
          {#each statuses as status}
            <option value={status}>{status}</option>
          {/each}
        </select>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-200">
            <th class="text-left py-3 px-4 text-sm font-medium text-gray-500">이름</th>
            <th class="text-left py-3 px-4 text-sm font-medium text-gray-500">이메일</th>
            <th class="text-left py-3 px-4 text-sm font-medium text-gray-500">역할</th>
            <th class="text-left py-3 px-4 text-sm font-medium text-gray-500">상태</th>
            <th class="text-left py-3 px-4 text-sm font-medium text-gray-500">마지막 로그인</th>
            <th class="text-left py-3 px-4 text-sm font-medium text-gray-500">가입일</th>
            <th class="text-right py-3 px-4 text-sm font-medium text-gray-500"></th>
          </tr>
        </thead>
        <tbody>
          {#each filteredUsers as user}
            <tr class="border-b border-gray-100 hover:bg-gray-50">
              <td class="py-3 px-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-medium">
                    {user.name[0]}
                  </div>
                  <span class="font-medium text-gray-900">{user.name}</span>
                </div>
              </td>
              <td class="py-3 px-4 text-gray-500">{user.email}</td>
              <td class="py-3 px-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {user.role === '관리자' ? 'bg-violet-100 text-violet-800' : 'bg-gray-100 text-gray-800'}">
                  {user.role}
                </span>
              </td>
              <td class="py-3 px-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {user.status === '활성' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                  {user.status}
                </span>
              </td>
              <td class="py-3 px-4 text-gray-500">{user.lastLogin}</td>
              <td class="py-3 px-4 text-gray-500">{user.createdAt}</td>
              <td class="py-3 px-4 text-right">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>

      {#if filteredUsers.length === 0}
        <div class="text-center py-12 text-gray-500">
          검색 결과가 없습니다.
        </div>
      {/if}
    </div>
  </div>
</div> 