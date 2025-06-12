<script>
  import Input from '../ui/Input.svelte';
  import Button from '../ui/Button.svelte';
  let title = '';
  let content = '';
  function handleSubmit() {
    // 게시글 등록/수정 로직 샘플
    alert(`제목: ${title}\n내용: ${content}`);
  }
</script>
<form class="space-y-4" on:submit|preventDefault={handleSubmit}>
  <Input bind:value={title} placeholder="제목" />
  <textarea bind:value={content} placeholder="내용" class="border rounded px-3 py-2 w-full h-32"></textarea>
  <Button type="submit">저장</Button>
</form> 