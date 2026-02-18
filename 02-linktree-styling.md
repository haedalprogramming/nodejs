
# 🎨 Week 02. 옷 입히기 – 넷플릭스 스타일 UI (CSS Magic)

> "CSS는 단순히 예쁘게 만드는 게 아닙니다. 사용자의 시선을 지휘하는 기술입니다."

---

## 🎯 이번 주 목표

- CSS Box Model을 이해하고 여백(Margin / Padding)을 제어한다.
- Flexbox & Grid를 사용하여 자유자재로 레이아웃을 구성한다.
- Animation & Hover 효과로 살아있는 인터랙션을 구현한다.

### 🔑 Key Tech
- CSS3
- Flexbox
- CSS Grid
- Media Query

### 🏆 Result
다크 모드 기반의 세련된 디자인 + 마우스를 올리면 반응하는 버튼 구현

---

# 📅 Monday (오후 2.5h)
## 레이아웃의 혁명, Flexbox

---

## ✅ Check Point 1. HTML 클래스명 일치 여부 (수업 시작 전 확인)

💬 수업 시작 멘트:

> "여러분, 지난주에 만든 index.html을 켜세요.  
> `<section>` 태그에 `class="link-list"`가 있는지,  
> 그 안에 `<ul>`과 `<li>` 구조가 있는지 확인하세요.  
> 다르다면 HTML을 수정하거나 CSS 선택자를 본인 코드에 맞게 바꿔야 합니다."

⚠ CSS는 선택자가 정확히 일치해야 적용됩니다.

---

## 1️⃣ Setup: CSS 연결하기 (30분)

### 📁 파일 생성
- `style.css` 파일을 `index.html`과 같은 폴더에 생성

### 🔗 HTML 연결

```html
<link rel="stylesheet" href="style.css">
```

### 🔤 Google Fonts
- Google Fonts에서 `Noto Sans KR` 또는 `Pretendard` 검색
- `<head>` 안에 폰트 링크 추가

---

## 2️⃣ Core Concept: 초기화와 박스 모델 (40분)

### A. Reset CSS

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #141414;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
}
```

### B. Box Model 이론

- Content
- Padding
- Border
- Margin

---

## 3️⃣ Hands-on: Flexbox로 중앙 정렬하기 (1시간 20분)

### A. 프로필 영역

```css
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    text-align: center;
}

header img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #E50914;
    margin-bottom: 1rem;
}

header h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}
```

### B. 링크 기본 스타일

```css
a {
    text-decoration: none;
    color: white;
    cursor: pointer; /* 👈 디테일 추가 */
}
```

---

# 📅 Tuesday (오전 2.5h)
## 그리드 시스템 & 인터랙션

---

## 1️⃣ Core Concept: Flex vs Grid (40분)

- Flexbox → 1차원
- Grid → 2차원

---

## 2️⃣ Hands-on: 벤토 그리드 배치 (1시간)

```css
.link-list ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    list-style: none;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
}

.link-list li a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    padding: 1.2rem;
    border-radius: 8px;
    font-weight: bold;
    border: 1px solid transparent;
}
```

---

## 3️⃣ Interaction

```css
.link-list li a {
    transition: all 0.3s ease;
}

.link-list li a:hover {
    background-color: #E50914;
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(229, 9, 20, 0.4);
}
```

---

## 4️⃣ Responsive (시간 부족 시 전략 포함)

```css
@media (min-width: 768px) {
    .link-list ul {
        grid-template-columns: 1fr 1fr;
    }

    .link-list li:first-child {
        grid-column: span 2;
    }
}
```

⏱ 만약 시간이 부족하다면:

- 코드를 그대로 복사해서 붙여넣게 한다.
- `768px` 숫자를 바꿔보면서 화면이 어떻게 변하는지만 보여준다.
- Media Query의 "개념 이해"에 집중하고 디테일 설명은 다음 기회로 넘겨도 충분하다.

---

# 👨‍🏫 Teacher's Note

## ⚠ CSS가 안 먹혀요!

- 오타 확인
- `<link>` 경로 확인
- 강력 새로고침: Ctrl + Shift + R

### 🔎 F12 개발자 도구 활용
- Margin / Padding 시각적으로 확인

---

## 🚀 심화 과제

- Glassmorphism  
  `backdrop-filter: blur(10px)`

- Background Image 추가

---

# 📝 과제

### 🎯 미션
넷플릭스 스타일을 벗어나 **"나만의 테마 컬러"**로 커스터마이징

### 📤 제출
Vercel에 다시 배포(Push) 후 변경된 링크 제출

