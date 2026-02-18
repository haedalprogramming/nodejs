
// ======================================================
// 🚀 Week 1 Study File
// HTML + Git + Deploy 개념 정리 (설명용 주석 포함)
// ======================================================


// ======================================================
// 1️⃣ Git 기본 설정 (터미널에서 실행)
// ======================================================

/*
git config --global user.name "이름"
→ Git 커밋 작성자 이름 설정

git config --global user.email "이메일"
→ GitHub 계정 이메일과 동일하게 맞추는 것이 좋음
*/


// ======================================================
// 2️⃣ Git 저장소 생성 & GitHub 연결
// ======================================================

/*
git init
→ 현재 폴더를 Git 저장소로 초기화

git remote add origin https://github.com/username/linktree-project.git
→ GitHub 원격 저장소 연결

git add .
→ 모든 파일을 스테이징 영역에 추가

git commit -m "first commit"
→ 첫 번째 커밋 생성

git push -u origin main
→ GitHub로 코드 업로드
*/


// ======================================================
// 3️⃣ Emmet 구조 생성 (HTML 자동 생성 도구)
// ======================================================

/*
div.container>header+main+footer
→ Tab 누르면 아래 HTML 자동 생성
*/

/*
<div class="container">
    <header></header>
    <main></main>
    <footer></footer>
</div>
*/


// ======================================================
// 4️⃣ Semantic HTML 구조 예시
// ======================================================

/*
<main class="app-container">

    <section class="profile-section">
        프로필 영역
    </section>

    <section class="link-list">
        링크 버튼 영역
    </section>

    <section class="social-icons">
        SNS 아이콘 영역
    </section>

</main>
*/

// main  : 페이지 핵심 콘텐츠
// section : 의미 있는 구역 구분
// class : CSS 스타일 적용을 위한 이름


// ======================================================
// 5️⃣ Form 태그 (Frontend UI만 구현)
// ======================================================

/*
<form>

  <input 
    type="text" 
    placeholder="이름" 
    required
  >

  <input 
    type="email" 
    placeholder="이메일" 
    required
  >

  <textarea 
    placeholder="메시지를 입력하세요"
  ></textarea>

  <button type="submit">
    보내기
  </button>

</form>
*/

// ⚠ 현재는 서버가 없기 때문에 실제 메일은 전송되지 않음
// 👉 5주차 Node.js에서 서버를 배우면 작동하게 만들 예정


// ======================================================
// 6️⃣ OG Meta Tag (카카오톡 공유 썸네일)
// ======================================================

/*
<meta property="og:title" content="홍길동의 링크트리">
<meta property="og:description" content="풀스택 개발자 포트폴리오입니다.">
<meta property="og:image" content="./images/og-thumb.jpg">
*/

// ⚠ og-thumb.jpg 파일이 실제로 존재해야 미리보기 정상 작동


// ======================================================
// 7️⃣ favicon 설정
// ======================================================

/*
<link rel="icon" href="./favicon.ico">
*/

// 브라우저 탭에 표시되는 작은 아이콘


// ======================================================
// 8️⃣ 배포 흐름 이해하기
// ======================================================

// Local (내 컴퓨터)
//   ↓ git push
// GitHub (원격 저장소)
//   ↓ 자동 연동
// Vercel 배포 서버
//   ↓
// 전 세계 접속 가능한 URL 생성


// ======================================================
// 🎯 핵심 요약
// ======================================================

// Git → 코드 버전 관리
// Semantic HTML → 검색엔진이 이해하기 좋은 구조
// Form → 사용자 입력 UI
// OG Tag → 공유 최적화
// Deploy → 인터넷에 공개
