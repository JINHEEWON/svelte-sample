<script>
  export let files = [{ name: '파일1.pdf', size: '1MB' }];
</script>
<ul class="divide-y">
  {#each files as file}
    <li class="py-2 flex justify-between">
      <span>{file.name}</span>
      <span class="text-xs text-gray-400">{file.size}</span>
    </li>
  {/each}
</ul> 