# 🚀 Week 1 (수정안): 뼈대 잡기 & 개발 환경 "완벽" 구축

> **"단순한 코딩이 아닙니다. 전 세계에 접속 가능한 '내 서버'를 갖는
> 시간입니다."**

------------------------------------------------------------------------

## 🔥 변경 포인트

-   ✅ **Git/GitHub 연동 추가**\
    → 첫날부터 버전 관리를 시작합니다. (※ 여기서 시간 많이 소요됨)

-   ✅ **Rich Content 구현**

    -   `<iframe>` (유튜브 / 지도 삽입)
    -   `<form>` (연락처 양식)
    -   `<meta>` (카카오톡 공유 미리보기 OG 태그)

-   ✅ **Live Deploy**

    -   Vercel / GitHub Pages 활용
    -   실제 URL 생성

------------------------------------------------------------------------

# 📅 Monday (오후 2.5h)

## Pro처럼 시작하기 (Git & Semantic)

------------------------------------------------------------------------

## 1️⃣ The Real Environment (1시간)

### 💻 VS Code 심화 세팅

-   Prettier (자동 포맷팅)
-   Material Icon Theme
-   Live Server

### ⚙ settings.json 설정

-   저장 시 자동 정렬 옵션 활성화
-   왜 편한지 직접 체감하게 하기

------------------------------------------------------------------------

### 🧠 Git & GitHub CLI (가장 중요 / 가장 오래 걸림)

1.  Git 설치
2.  git config 설정

``` bash
git config --global user.name "이름"
git config --global user.email "이메일"
```

3.  GitHub Repository 생성\
    → `linktree-project`

4.  Local ↔ Remote 연결

``` bash
git init
git remote add origin https://github.com/username/linktree-project.git
```

5.  첫 커밋

``` bash
git add .
git commit -m "first commit"
git push -u origin main
```

> ⚠ 학생들마다 인증 오류, 설치 오류 발생 → 여기서 1시간 훅 감

------------------------------------------------------------------------

## 2️⃣ Semantic Structure

### "검색엔진이 좋아하는 구조" (1시간 30분)

### ✨ Emmet 숙련

``` html
div.container>header+main+footer
```

단축키로 구조 빠르게 생성하는 법 훈련

------------------------------------------------------------------------

### 🏗 구조 고도화

❌ 단순 `<div>` 남발 금지

  태그          용도
  ------------- -------------
  `<nav>`       내비게이션
  `<article>`   독립 콘텐츠
  `<section>`   구역 구분
  `<aside>`     보조 콘텐츠

------------------------------------------------------------------------

### 🎨 CSS를 위한 사전 준비

-   class / id 미리 설계
-   예시: `<div class="profile-card">`

------------------------------------------------------------------------

### 🧪 실습 코드

``` html
<main class="app-container">
    <section class="profile-section">
    </section>

    <section class="link-list">
    </section>

    <section class="social-icons">
    </section>
</main>
```

------------------------------------------------------------------------

# 📅 Tuesday (오전 2.5h)

## 콘텐츠 채우기 & 실전 배포

------------------------------------------------------------------------

## 1️⃣ Advanced HTML Tags (1시간)

### 🎵 Media Embedding (`iframe`)

-   유튜브 → "소스 코드 복사"
-   구글 맵 → 퍼가기 기능 활용

------------------------------------------------------------------------

### 📩 Input & Form (UI만 구현)

``` html
<form>
  <input type="text" placeholder="이름" required>
  <input type="email" placeholder="이메일" required>
  <textarea placeholder="메시지를 입력하세요"></textarea>
  <button type="submit">보내기</button>
</form>
```

📌 학습 포인트

-   `placeholder`
-   `required`
-   `type="email"`
-   `button type="submit"`

------------------------------------------------------------------------

## 2️⃣ Meta Tags & SEO (30분)

### 📲 카톡 공유 썸네일 만들기 (OG Tag)

`<head>` 안에 추가:

``` html
<meta property="og:title" content="홍길동의 링크트리">
<meta property="og:description" content="풀스택 개발자 포트폴리오입니다.">
<meta property="og:image" content="./images/og-thumb.jpg">
```

> 💡 이게 있어야 "진짜 서비스"처럼 보임

------------------------------------------------------------------------

## 3️⃣ Deploy

### "Hello World to the World" (1시간)

### 🚀 배포 플랫폼 (택 1)

-   Vercel (가장 쉬움, 추천)
-   Netlify
-   GitHub Pages

------------------------------------------------------------------------

### 📱 모바일 확인

1.  배포된 URL 복사
2.  카카오톡 "나에게 보내기" 전송
3.  스마트폰으로 접속 확인
4.  친구들과 서로 접속해보기

------------------------------------------------------------------------

# 👨‍🏫 Teacher's Note (난이도 조절 & 팁)

------------------------------------------------------------------------

## ⚠ Git 대참사 대비

첫날 `git push`에서\
Token/Auth 문제로 막히는 학생 다수 발생 예상

### 💡 해결 전략

-   GitHub Desktop 활용
-   VS Code 내장 Git 사용법 병행 안내
-   CLI 진입장벽 낮추기

------------------------------------------------------------------------

## ⏳ 시간이 남는다면 (심화)

-   SVG 아이콘 직접 삽입
-   `fill` 속성 확인
-   favicon 설정 (`favicon.ico`)
-   브라우저 탭 아이콘 바꾸기

------------------------------------------------------------------------

# 📝 과제

1.  본인 페이지 URL 제출
2.  `README.md`에 프로젝트 소개 3줄 이상 작성 후 커밋
