<script>
  let files = [];
  function handleFile(e) {
    files = Array.from(e.target.files);
  }
  function upload() {
    alert(`${files.length}개 파일 업로드`);
  }
</script>
<div class="space-y-2">
  <input type="file" multiple on:change={handleFile} />
  <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={upload}>업로드</button>
</div> 