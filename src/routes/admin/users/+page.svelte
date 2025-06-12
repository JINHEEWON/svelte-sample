<script>
  // 실제 데이터는 API 연동 필요
  let users = [
    { id: 1, name: '홍길동', email: 'hong@test.com', role: 'USER', status: 'ACTIVE' },
    { id: 2, name: '김철수', email: 'kim@test.com', role: 'ADMIN', status: 'ACTIVE' }
  ];
  let search = '';
</script>

<div class="max-w-2xl mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">사용자 관리</h1>
  <input placeholder="이름/이메일 검색" bind:value={search} />
  <table class="min-w-full border text-sm">
    <thead>
      <tr>
        <th class="border px-2 py-1">이름</th>
        <th class="border px-2 py-1">이메일</th>
        <th class="border px-2 py-1">권한</th>
        <th class="border px-2 py-1">상태</th>
        <th class="border px-2 py-1">관리</th>
      </tr>
    </thead>
    <tbody>
      {#each users.filter(u => u.name.includes(search) || u.email.includes(search)) as user}
        <tr>
          <td class="border px-2 py-1">{user.name}</td>
          <td class="border px-2 py-1">{user.email}</td>
          <td class="border px-2 py-1">{user.role}</td>
          <td class="border px-2 py-1">{user.status}</td>
          <td class="border px-2 py-1">
            <button>상태 변경</button>
            <button>강제 로그아웃</button>
            <button>삭제</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div> 