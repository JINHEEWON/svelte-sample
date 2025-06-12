<script>
  // 실제 데이터는 API 연동 필요
  let files = [
    { name: '문서.pdf', size: '1MB' },
    { name: '대용량.zip', size: '100MB' }
  ];
</script>
<div class="max-w-2xl mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">파일 관리</h1>
  <table class="min-w-full border text-sm">
    <thead>
      <tr>
        <th class="border px-2 py-1">파일명</th>
        <th class="border px-2 py-1">크기</th>
      </tr>
    </thead>
    <tbody>
      {#each files as file}
        <tr>
          <td class="border px-2 py-1">{file.name}</td>
          <td class="border px-2 py-1">{file.size}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<h1>📁 파일 관리</h1>
<ul>
  {#each files as file}
    <li>
      {file.name} ({file.size}) - {file.uploader}
      <button>삭제</button>
      <button>중복 정리</button>
    </li>
  {/each}
</ul>
<p>스토리지 사용량: 3MB (샘플)</p> 