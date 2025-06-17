<script>
  import FileUpload from '$lib/components/files/FileUpload.svelte';
  import FileList from '$lib/components/files/FileList.svelte';
  import SearchBox from '$lib/components/ui/SearchBox.svelte';
  
  let files = [
    { 
      id: 1,
      name: '프로젝트_발표자료.pdf',
      size: '2.5MB',
      type: 'PDF',
      uploadedAt: '2024-03-15',
      uploadedBy: '홍길동'
    },
    { 
      id: 2,
      name: '회의록_2024_03.docx',
      size: '1.2MB',
      type: 'Word',
      uploadedAt: '2024-03-14',
      uploadedBy: '김철수'
    }
  ];

  let search = '';
  let selectedType = '전체';
  let fileTypes = ['전체', 'PDF', 'Word', 'Excel', 'Image', '기타'];

  $: filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = selectedType === '전체' || file.type === selectedType;
    return matchesSearch && matchesType;
  });

  let totalStorage = '3.7MB';
  let storageLimit = '10GB';
  let storageUsage = 15; // percentage
</script>

<div class="p-6">
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-bold text-gray-900">파일</h1>
    <button 
      class="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
      파일 업로드
    </button>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <!-- Storage Stats -->
    <div class="lg:col-span-1">
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-lg font-semibold mb-4">스토리지 현황</h2>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-gray-600">사용량</span>
              <span class="font-medium">{totalStorage}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-violet-600 h-2 rounded-full" style="width: {storageUsage}%"></div>
            </div>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">전체 용량</span>
            <span class="font-medium">{storageLimit}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- File List -->
    <div class="lg:col-span-3">
      <div class="bg-white rounded-xl shadow-sm p-6">
        <div class="flex flex-col sm:flex-row gap-4 mb-6">
          <div class="flex-1">
            <SearchBox 
              bind:value={search} 
              placeholder="파일명으로 검색"
            />
          </div>
          <div class="sm:w-48">
            <select 
              bind:value={selectedType}
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400"
            >
              {#each fileTypes as type}
                <option value={type}>{type}</option>
              {/each}
            </select>
          </div>
        </div>

        <div class="space-y-4">
          {#each filteredFiles as file}
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-gray-100 rounded">
                  <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">{file.name}</h3>
                  <p class="text-sm text-gray-500">{file.uploadedBy} · {file.uploadedAt}</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm text-gray-500">{file.size}</span>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>
          {/each}

          {#if filteredFiles.length === 0}
            <div class="text-center py-12 text-gray-500">
              검색 결과가 없습니다.
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div> 