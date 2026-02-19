# ⚡ Week 03. CSS 치트키: 부트스트랩5 (Bootstrap 5)

> "바퀴를 다시 발명하지 마세요. (Don't Reinvent the Wheel)" 현업
> 개발자들은 모든 걸 처음부터 만들지 않습니다. 검증된 도구를 활용해
> **'속도'**를 냅니다.

------------------------------------------------------------------------

## 🎯 이번 주 목표

-   **Library(라이브러리)**의 개념을 이해하고 프로젝트에 불러온다 (CDN)
-   **Grid System (12분할)**을 이해하여 반응형 레이아웃을 1초 만에 짠다
-   Component를 복사+붙여넣기 하여 그럴싸한 포트폴리오 사이트를 완성한다

**Key Tech:** Bootstrap 5, CDN, Utility Classes\
**Result:** PC/모바일에서 완벽하게 작동하는 반응형 포트폴리오 웹사이트

------------------------------------------------------------------------

# 📅 Monday (오후 2.5h)

## 1️⃣ Setup: 10초 만에 환경 구축 (CDN) (30분)

내 컴퓨터에 파일을 다운로드하지 않고, 인터넷 주소(CDN)만 연결하면 설치가
끝납니다.

### ✅ Bootstrap 5 Starter Template

index.html을 새로 만들고 아래 코드를 붙여넣으세요. (기존 파일은 백업!)

``` html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  </head>
  <body>
    
    <h1 class="text-center mt-5">Hello, Bootstrap!</h1>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

------------------------------------------------------------------------

## 2️⃣ Core Concept: 12단 그리드 시스템 (1시간)

부트스트랩의 심장입니다. 화면을 가로 12칸으로 쪼개서 생각합니다.

공식: container \> row \> col-숫자\
규칙: 한 줄(Row) 안에 있는 col 숫자의 합이 12가 되어야 함

반응형 접두사:

-   col-6: (모바일\~) 항상 절반
-   col-md-6: (태블릿\~) 화면이 중간 이상일 때만 절반

### 📝 실습 코드 (Hero Section)

``` html
<div class="container mt-5">
  <div class="row align-items-center">
    <div class="col-md-7 col-12 order-md-1 order-2">
      <h1 class="display-4 fw-bold">풀스택 개발자 홍길동</h1>
      <p class="lead">문제를 해결하는 코드를 작성합니다.</p>
      <button class="btn btn-primary btn-lg">포트폴리오 보기</button>
      <button class="btn btn-outline-secondary btn-lg">연락하기</button>
    </div>

    <div class="col-md-5 col-12 order-md-2 order-1 text-center">
      <img src="./images/me.jpg" class="img-fluid rounded-circle shadow-lg" alt="내 사진">
    </div>
  </div>
</div>
```

Tip: order 클래스를 쓰면 모바일에서 이미지와 글자의 순서를 바꿀 수
있습니다.

------------------------------------------------------------------------

## 3️⃣ Utility Class: CSS 없이 디자인하기 (1시간)

CSS 파일(style.css)을 열지 않고 클래스 이름만으로 디자인합니다.

### 여백 (Spacing)

-   m(margin), p(padding) + t(top), b(bottom) + 0\~5(크기)
-   mt-5: Margin Top 5 (가장 큼)
-   py-3: Padding Y축(위아래) 3 (중간)

### 색상 (Color)

-   text-primary (파랑)
-   bg-dark (검정 배경)
-   text-danger (빨강)

### 텍스트

-   text-center
-   fw-bold (굵게)
-   fs-1 (폰트 사이즈)

------------------------------------------------------------------------

# 📅 Tuesday (오전 2.5h)

## 1️⃣ Component: 복사 붙여넣기의 예술 (1시간)

직접 짜려면 3시간 걸리는 UI를 3분 만에 만듭니다. 공식 문서에서 코드를
복사(Copy)해오세요.

### A. 네비게이션 바 (Navbar)

-   검색: Navbar
-   복사 후 `<body>` 바로 아래 붙여넣기
-   수정: bg-body-tertiary → bg-dark
-   `data-bs-theme="dark"` 추가하면 다크모드 메뉴바 완성

### B. 프로젝트 카드 (Card)

-   검색: Card
-   그리드 시스템 안에 넣어야 예쁩니다
-   별도 이미지 파일 없이도 바로 보이도록 플레이스홀더 이미지를
    사용합니다

``` html
<div class="container mb-5">
  <h2 class="text-center mb-4">My Projects</h2>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100">
        <img src="https://picsum.photos/400/200" class="card-img-top" alt="랜덤 이미지">
        <div class="card-body">
          <h5 class="card-title">링크트리 프로젝트</h5>
          <p class="card-text">HTML/CSS로 만든 첫 웹사이트입니다.</p>
          <a href="#" class="btn btn-primary">보러가기</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

------------------------------------------------------------------------

## 2️⃣ Customizing: 부트스트랩 덮어쓰기 (1시간)

"부트스트랩 티가 너무 나요!" → 내 스타일(style.css)로 덮어씁니다.

style.css 파일을 만들고 부트스트랩 링크 아래쪽에 연결합니다. (순서
중요!)

``` html
<link href="bootstrap.min.css..." rel="stylesheet">
<link href="style.css" rel="stylesheet">
```

### !important 없이 덮어쓰기 연습

``` css
/* 부트스트랩 버튼 색상 바꾸기 */
.btn-primary {
    background-color: #6c5ce7; /* 나만의 보라색 */
    border-color: #6c5ce7;
}

.btn-primary:hover {
    background-color: #5541c8;
}
```

------------------------------------------------------------------------

## 3️⃣ Wrap-up: 최종 점검 및 배포 (30분)

-   모바일 확인: 브라우저 창을 줄였을 때 깨지는 곳이 없는지 확인
-   이미지가 튀어나가면 `img-fluid` 클래스 추가
-   Vercel에 다시 Push 하여 업데이트

------------------------------------------------------------------------

# 👨‍🏫 Teacher's Note (Tip)

### 학생들이 자주 묻는 질문

> "선생님, 제 CSS가 안 먹혀요!"

👉 99%는 HTML `<head>`에서 부트스트랩 링크가 내 CSS 링크보다 아래에
있어서 그렇습니다.\
내 CSS가 더 밑에 있어야 덮어쓸 수 있습니다 (Cascading).

------------------------------------------------------------------------

### 클래스 이름 외우지 마세요

"마진이 ml-5였나 ms-5였나?"\
(부트스트랩5부터 Left/Right가 Start/End로 바뀜)

👉 외우지 말고 **공식 문서를 검색(Ctrl+K)하는 법**을 가르쳐주세요.\
그게 실무입니다.

------------------------------------------------------------------------

## 🔥 심화 (시간 남을 때)

-   Bootstrap Icons: `<i>` 태그로 아이콘 넣기
-   Modal: 버튼 클릭 시 팝업창 기능 복사해오기

------------------------------------------------------------------------

# 📝 과제

### 🎯 미션

부트스트랩 컴포넌트 중 수업 시간에 안 배운 것\
(예: Carousel, Accordion, Modal)을 최소 1개 이상 찾아서\
내 포트폴리오에 적용해 오기

### 📌 제출

Vercel 링크 제출

