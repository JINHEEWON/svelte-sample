<script>
  let email = '';
  let password = '';
  let name = '';
  let agree = false;
  function handleSignup() {
    // TODO: API 연동
    if (!agree) return alert('약관에 동의해주세요.');
    alert('회원가입 시도: ' + email);
  }
</script>

<div class="max-w-sm mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">회원가입</h1>
  <form class="space-y-4" on:submit|preventDefault={handleSignup}>
    <input class="border rounded px-3 py-2 w-full" type="email" bind:value={email} placeholder="이메일" required />
    <input class="border rounded px-3 py-2 w-full" type="password" bind:value={password} placeholder="비밀번호" required />
    <label class="flex items-center gap-2 text-sm">
      <input type="checkbox" bind:checked={agree} required />
      약관에 동의합니다
    </label>
    <button class="w-full px-4 py-2 bg-blue-600 text-white rounded" type="submit" disabled={!agree}>회원가입</button>
  </form>
  <div class="mt-4 text-xs text-gray-500">이메일 인증은 추후 안내됩니다.</div>
</div> 