/* ======================================================
   🚀 Week 01 Study File: HTML + Git + Deploy 개념 정리
   ====================================================== */


/* ======================================================
   [1] Git 기본 설정 (터미널에서 실행)
   - Git 커밋 작성자 정보 설정
   - 최초 1회만 설정하면 됨
   ====================================================== */

/*
git config --global user.name "이름"
→ Git 커밋 작성자 이름 설정

git config --global user.email "이메일"
→ GitHub 계정 이메일과 동일하게 맞추는 것이 좋음
*/


/* ======================================================
   [2] Git 저장소 생성 & GitHub 연결
   - 로컬 저장소 생성 후 원격 저장소와 연결
   - add → commit → push 흐름 이해하기
   ====================================================== */

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


/* ======================================================
   [3] Emmet 구조 생성 (HTML 자동 생성 도구)
   - 반복되는 HTML 구조를 빠르게 생성
   - 생산성 향상 필수 도구
   ====================================================== */

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


/* ======================================================
   [4] Semantic HTML 구조 예시
   - 의미 중심 태그 사용
   - 검색엔진 최적화(SEO)에 중요
   ====================================================== */

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

// main    : 페이지 핵심 콘텐츠
// section : 의미 있는 구역 구분
// class   : CSS 스타일 적용을 위한 이름


/* ======================================================
   [5] Form 태그 (Frontend UI 구현)
   - 사용자 입력을 받는 인터페이스
   - 현재는 서버가 없어 실제 전송은 되지 않음
   ====================================================== */

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

// ⚠ 서버 연결 전까지는 실제 데이터 전송되지 않음
// 👉 이후 Node.js에서 서버와 연결 예정


/* ======================================================
   [6] OG Meta Tag (카카오톡 공유 썸네일)
   - SNS 공유 시 미리보기 정보 설정
   - title / description / image 중요
   ====================================================== */

/*
<meta property="og:title" content="홍길동의 링크트리">
<meta property="og:description" content="풀스택 개발자 포트폴리오입니다.">
<meta property="og:image" content="./images/og-thumb.jpg">
*/

// ⚠ og:image 경로에 실제 이미지 파일이 존재해야 정상 작동


/* ======================================================
   [7] Favicon 설정
   - 브라우저 탭 아이콘 설정
   ====================================================== */

/*
<link rel="icon" href="./favicon.ico">
*/


/* ======================================================
   [8] 배포 흐름 이해하기
   - 코드가 사용자에게 전달되는 과정
   ====================================================== */

// Local (내 컴퓨터)
//   ↓ git push
// GitHub (원격 저장소)
//   ↓ 자동 연동
// Vercel 배포 서버
//   ↓
// 전 세계 접속 가능한 URL 생성


/* ======================================================
   🎯 핵심 요약
   ====================================================== */

// Git → 코드 버전 관리 시스템
// Semantic HTML → 검색엔진이 이해하기 좋은 구조
// Form → 사용자 입력 UI
// OG Tag → SNS 공유 최적화
// Deploy → 인터넷에 프로젝트 공개
