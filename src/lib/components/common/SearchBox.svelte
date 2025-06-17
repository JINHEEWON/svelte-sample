<script>
  export let value = '';
  export let placeholder = '검색...';
</script>

<div class="flex items-center gap-2">
  <input 
    type="text"
    class="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400"
    {placeholder}
    bind:value
  />
  <svg 
    class="h-[30px] w-[30px] text-gray-400" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2" 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
    />
  </svg>
</div> 