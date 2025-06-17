<script>
  import LoginForm from '$lib/components/auth/LoginForm.svelte';
</script>
<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white rounded-2xl shadow p-8 w-full max-w-sm">
    <h1 class="text-2xl font-extrabold mb-6 text-center text-gray-900">로그인</h1>
    <LoginForm />
    <div class="mt-6 flex justify-between text-sm">
      <a href="#" class="text-blue-600 hover:underline">비밀번호 찾기</a>
      <a href="/signup" class="text-blue-600 hover:underline">회원가입</a>
    </div>
  </div>
</div> 