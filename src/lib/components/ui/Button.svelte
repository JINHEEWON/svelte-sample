<script>
  export let type = 'button';
  export let disabled = false;
</script>
<button {type} {disabled} class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">
  <slot />
</button> 