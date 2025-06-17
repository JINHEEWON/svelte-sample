<script>
  export let columns = [];
  export let rows = [];
</script>
<table class="min-w-full border text-sm">
  <thead>
    <tr>
      {#each columns as col}
        <th class="border px-2 py-1 bg-gray-100">{col}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        {#each row as cell}
          <td class="border px-2 py-1">{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table> 