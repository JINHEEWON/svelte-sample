<script>
  import FileUpload from '$lib/components/files/FileUpload.svelte';
  import FileList from '$lib/components/files/FileList.svelte';
  let files = [
    { name: '문서.pdf', size: '1MB' },
    { name: '사진.jpg', size: '2MB' }
  ];
</script>
<div class="max-w-2xl mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">파일 관리</h1>
  <FileUpload />
  <div class="mt-6">
    <h2 class="font-semibold mb-2">내 파일</h2>
    <FileList {files} />
  </div>
  <div class="mt-6 bg-gray-50 p-4 rounded">
    <div class="text-sm text-gray-500">총 사용량: 3MB</div>
  </div>
</div> 