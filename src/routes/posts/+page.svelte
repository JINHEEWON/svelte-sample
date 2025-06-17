<script>
  import PostList from '$lib/components/posts/PostList.svelte';
  import SearchBox from '$lib/components/ui/SearchBox.svelte';
  
  // 게시글 목록, 검색 등은 API 연동 필요(추후 구현)
  let posts = [
    { 
      id: 1,
      title: 'SvelteKit으로 시작하는 웹 개발', 
      content: 'SvelteKit은 Svelte의 애플리케이션 프레임워크로, 풀스택 웹 애플리케이션을 쉽게 구축할 수 있습니다...', 
      author: '홍길동',
      createdAt: '2024-03-15',
      category: '기술'
    },
    { 
      id: 2,
      title: 'Spring Boot와 함께하는 백엔드 개발', 
      content: 'Spring Boot는 자바 기반의 강력한 백엔드 프레임워크입니다. 이번 글에서는 기본적인 CRUD 구현 방법을 알아봅니다...', 
      author: '김철수',
      createdAt: '2024-03-14',
      category: '튜토리얼'
    }
  ];

  let search = '';
  let selectedCategory = '전체';
  let categories = ['전체', '공지', '기술', '튜토리얼', '일반'];

  $: filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                         post.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === '전체' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
</script>

<div class="p-6">
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-bold text-gray-900">게시글</h1>
    <a 
      href="/posts/create" 
      class="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
      새 글 작성
    </a>
  </div>

  <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <div class="flex-1">
        <SearchBox 
          bind:value={search} 
          placeholder="제목 또는 내용으로 검색"
        />
      </div>
      <div class="sm:w-48">
        <select 
          bind:value={selectedCategory}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-200 focus:border-violet-400"
        >
          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
      </div>
    </div>

    <PostList posts={filteredPosts} />

    {#if filteredPosts.length === 0}
      <div class="text-center py-12 text-gray-500">
        검색 결과가 없습니다.
      </div>
    {/if}
  </div>
</div> 