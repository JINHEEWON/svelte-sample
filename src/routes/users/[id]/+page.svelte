<script>
  export let params;
  // 실제로는 API에서 사용자 정보를 받아와야 함
  let user = {
    id: params.id,
    name: '홍길동',
    email: 'hong@test.com',
    bio: '안녕하세요! 샘플 사용자입니다.',
    profileImage: 'https://via.placeholder.com/100',
    posts: 3,
    files: 2
  };
</script>

<div class="max-w-md mx-auto py-12">
  <h1 class="text-2xl font-bold mb-4">사용자 정보</h1>
  <div class="mb-2 font-semibold">{user.name}</div>
  <div class="mb-2 text-gray-500">{user.email}</div>
  <div class="mb-2">게시글: {user.posts}개</div>
  <div class="mb-2">파일: {user.files}개</div>
</div>

<h1>내 프로필</h1>
<img src={user.profileImage} alt="프로필 이미지" width="100" />
<p>이름: {user.name}</p>
<p>이메일: {user.email}</p>
<p>자기소개: {user.bio}</p>
<button>정보 수정</button> 