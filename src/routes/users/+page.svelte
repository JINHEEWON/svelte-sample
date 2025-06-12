<script>
  // 실제로는 API에서 사용자 목록을 받아와야 함
  let users = [
    { id: 1, name: '홍길동', email: 'hong@example.com', role: 'USER' },
    { id: 2, name: '김철수', email: 'kim@example.com', role: 'ADMIN' }
  ];
  let user = { name: '홍길동', email: 'hong@test.com', bio: '안녕하세요!' };
</script>

<h1>사용자 목록</h1>
<ul>
  {#each users as user}
    <li>
      <a href={`/users/${user.id}`}>{user.name}</a> - {user.email} ({user.role})
    </li>
  {/each}
</ul>

<div class="max-w-md mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">내 프로필</h1>
  <div class="mb-4">
    <img src="https://placehold.co/80x80" alt="프로필" class="rounded-full mb-2" />
    <div class="font-semibold">{user.name}</div>
    <div class="text-gray-500 text-sm">{user.email}</div>
  </div>
  <div class="mb-4">
    <label class="block font-semibold mb-1">자기소개</label>
    <textarea class="border rounded px-3 py-2 w-full" bind:value={user.bio}></textarea>
  </div>
  <button class="px-4 py-2 bg-blue-600 text-white rounded">저장</button>
</div> 