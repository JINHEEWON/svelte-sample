<script>
  export let value = '';
  export let placeholder = '검색...';
  export let size = 'default';

  const sizes = {
    small: 'py-1 text-xs',
    default: 'py-1.5 text-sm',
    large: 'py-2 text-base'
  };

  $: sizeClass = sizes[size] || sizes.default;
</script>

<div class="flex gap-1">
  <input 
    type="text"
    class="flex-1 px-3 {sizeClass} border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400"
    {placeholder}
    bind:value
  />
  <button 
    class="px-2 {sizeClass} text-gray-500 hover:text-violet-600 border border-gray-300 rounded-lg flex items-center justify-center transition-colors"
  >
    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </button>
</div> 