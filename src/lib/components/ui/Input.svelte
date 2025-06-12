<script>
  export let type = 'text';
  export let value = '';
  export let placeholder = '';
  export let disabled = false;
</script>
<input {type} bind:value {placeholder} {disabled} class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" /> 