<script>
  import LoginForm from '$lib/components/auth/LoginForm.svelte';
</script>
<div class="max-w-sm mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">로그인</h1>
  <LoginForm />
  <div class="mt-4 flex justify-between text-sm">
    <a href="#" class="text-blue-600 hover:underline">비밀번호 찾기</a>
    <a href="/signup" class="text-blue-600 hover:underline">회원가입</a>
  </div>
</div> 