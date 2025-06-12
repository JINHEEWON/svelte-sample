<script>
  export let open = false;
  export let onClose = () => {};
</script>
{#if open}
  <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div class="bg-white rounded shadow-lg p-6 min-w-[300px]">
      <button class="absolute top-2 right-2" on:click={onClose}>✕</button>
      <slot />
    </div>
  </div>
{/if} 