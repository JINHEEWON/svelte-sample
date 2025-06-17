<script>
  let email = '';
  let password = '';
  let agree = false;
  function handleSignup() {
    alert('회원가입 샘플');
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white rounded-2xl shadow p-8 w-full max-w-sm">
    <h1 class="text-2xl font-extrabold mb-6 text-center text-gray-900">회원가입</h1>
    <form class="space-y-4" on:submit|preventDefault={handleSignup}>
      <input class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-200" type="email" bind:value={email} placeholder="이메일" required />
      <input class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-200" type="password" bind:value={password} placeholder="비밀번호" required />
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" bind:checked={agree} required />
        약관에 동의합니다
      </label>
      <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition" type="submit" disabled={!agree}>회원가입</button>
    </form>
    <div class="mt-6 text-xs text-gray-400 text-center">이메일 인증은 추후 안내됩니다.</div>
  </div>
</div> 