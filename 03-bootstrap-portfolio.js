
/* ======================================================
   ⚡ Week 03 Study File: Bootstrap 5 핵심 코드 정리
   ====================================================== */

/* ------------------------------------------------------
   [1] CDN 설치 (Bootstrap 5 기본 세팅)
   - 파일 다운로드 없이 링크만 연결
   - CSS는 <head>, JS는 </body> 직전에 위치
---------------------------------------------------------

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

------------------------------------------------------ */


/* ------------------------------------------------------
   [2] Grid System (12 Column System)
   공식: container > row > col-숫자
   - 한 row 안의 col 합은 12
   - col-md-6 → md 이상에서만 6칸
---------------------------------------------------------

<div class="container">
  <div class="row">
    <div class="col-12 col-md-6">왼쪽</div>
    <div class="col-12 col-md-6">오른쪽</div>
  </div>
</div>

------------------------------------------------------ */


/* ------------------------------------------------------
   [3] Hero Section 예제
   - order 클래스로 모바일 순서 변경
   - img-fluid로 반응형 이미지 처리
---------------------------------------------------------

<div class="container mt-5">
  <div class="row align-items-center">

    <div class="col-md-7 col-12 order-md-1 order-2">
      <h1 class="display-4 fw-bold">풀스택 개발자 홍길동</h1>
      <p class="lead">문제를 해결하는 코드를 작성합니다.</p>
      <button class="btn btn-primary btn-lg">포트폴리오 보기</button>
    </div>

    <div class="col-md-5 col-12 order-md-2 order-1 text-center">
      <img src="./images/me.jpg"
           class="img-fluid rounded-circle shadow-lg"
           alt="프로필 사진">
    </div>

  </div>
</div>

------------------------------------------------------ */


/* ------------------------------------------------------
   [4] Navbar (다크모드 + 모바일 햄버거 버튼 포함)
   - data-bs-theme="dark" 하나로 다크모드 끝
   - button 태그: 모바일에서 나오는 3선 버튼
---------------------------------------------------------

<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container">
    <a class="navbar-brand" href="#">My Portfolio</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto"> <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
      </ul>
    </div>
  </div>
</nav>

------------------------------------------------------ */


/* ------------------------------------------------------
   [5] Card Component (플레이스홀더 이미지 적용)
   - picsum.photos → 랜덤 이미지 자동 출력
---------------------------------------------------------

<div class="col-md-4">
  <div class="card h-100">
    <img src="https://picsum.photos/400/200"
         class="card-img-top"
         alt="랜덤 이미지">
    <div class="card-body">
      <h5 class="card-title">프로젝트 제목</h5>
      <p class="card-text">프로젝트 설명입니다.</p>
      <a href="#" class="btn btn-primary">보러가기</a>
    </div>
  </div>
</div>

------------------------------------------------------ */


/* ------------------------------------------------------
   [6] Utility Classes 정리
---------------------------------------------------------

# 여백 (Spacing)
mt-5  → margin-top
mb-3  → margin-bottom
py-4  → padding-top & bottom

# 텍스트
text-center → 가운데 정렬
fw-bold     → 굵게
fs-1        → 큰 글씨

# 색상
bg-dark       → 검정 배경
text-primary  → 파란색 글자
text-danger   → 빨간색 글자

------------------------------------------------------ */
/* ------------------------------------------------------
   [Bonus] Bootstrap Icons 사용법
   - <i class="bi bi-이름"></i> 형태로 사용
   - 공식 문서에서 아이콘 이름 검색해서 사용
---------------------------------------------------------

<button class="btn btn-primary">
  <i class="bi bi-hand-thumbs-up-fill"></i> 좋아요
</button>
<i class="bi bi-instagram text-danger fs-3"></i>

------------------------------------------------------ */

/* ------------------------------------------------------
   [7] Bootstrap 커스터마이징 (덮어쓰기)
   - 반드시 Bootstrap CSS 아래에 style.css 연결
---------------------------------------------------------

<link href="bootstrap.min.css" rel="stylesheet">
<link href="style.css" rel="stylesheet">

------------------------------------------------------ */

/* style.css 예시 */

.btn-primary {
  /* 만약 색상이 안 바뀌면 !important를 뒤에 붙여보세요 (최후의 수단) */
  background-color: #6c5ce7 !important; 
  border-color: #6c5ce7 !important;
}


/* ======================================================
   🎯 핵심 요약
   1. 외우지 말고 공식 문서를 검색하라
   2. Grid만 이해하면 레이아웃은 끝
   3. img-fluid 안 쓰면 100% 터진다
   ====================================================== */

