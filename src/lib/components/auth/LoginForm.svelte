<script>
  import Input from '../ui/Input.svelte';
  import Button from '../ui/Button.svelte';
  let email = '';
  let password = '';
  function handleLogin() {
    // 로그인 로직 샘플
    alert(`로그인: ${email}`);
  }
</script>
<form class="space-y-4" on:submit|preventDefault={handleLogin}>
  <Input type="email" bind:value={email} placeholder="이메일" />
  <Input type="password" bind:value={password} placeholder="비밀번호" />
  <Button type="submit">로그인</Button>
</form> 