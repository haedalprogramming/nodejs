/* ======================================================
   🎨 Week 02 Study File: 넷플릭스 스타일 UI 정리
   ====================================================== */

/* [1] Reset CSS (브라우저 기본값 제거)
   - box-sizing: padding을 줘도 박스가 커지지 않게 함 (필수!)
*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

body {
    background-color: #141414;        /* 다크 모드 배경 */
    color: white;                     /* 기본 글자색 */
    font-family: 'Noto Sans KR', sans-serif;
}

/* [2] Flexbox: 헤더 중앙 정렬 
   - flex-direction: column (세로 정렬)
   - align-items: center (가로축 가운데)
*/
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    text-align: center;
}

/* [3] 프로필 이미지 스타일링
   - object-fit: cover (이미지 찌그러짐 방지)
*/
header img {
    width: 120px;
    height: 120px;
    border-radius: 50%;               /* 완전한 원형 */
    object-fit: cover;
    border: 3px solid #E50914;        /* 포인트 컬러 */
    margin-bottom: 1rem;
}

/* [4] Grid 레이아웃 (링크 리스트)
   - 1fr: 남은 공간을 비율대로 채움
   - gap: 격자 사이의 간격
*/
.link-list ul {
    display: grid;
    grid-template-columns: 1fr;       /* 모바일 기본: 1줄 */
    gap: 1rem;
    list-style: none;                 /* 리스트 점 제거 */
    max-width: 600px;
    margin: 0 auto;                   /* 블록 요소 중앙 정렬 */
    padding: 0 20px;
}

/* [5] 카드 디자인 & 버튼
*/
.link-list li a {
    display: flex;                    /* 텍스트/아이콘 중앙 정렬용 */
    align-items: center;
    justify-content: center;
    background-color: #333;
    padding: 1.2rem;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;            /* 밑줄 제거 */
    color: white;
    
    /* 애니메이션 준비 (0.3초) */
    transition: all 0.3s ease;
    border: 1px solid transparent;    /* 호버 시 흔들림 방지용 투명 테두리 */
}

/* [6] Hover 인터랙션 (마우스 올렸을 때) 
*/
.link-list li a:hover {
    background-color: #E50914;
    transform: scale(1.05);           /* 1.05배 확대 */
    box-shadow: 0 10px 20px rgba(229, 9, 20, 0.4);
}

/* [7] 반응형 (태블릿/PC 대응)
   - 768px 이상일 때 2열로 변경
*/
@media (min-width: 768px) {
    .link-list ul {
        grid-template-columns: 1fr 1fr;
    }
    
    /* 첫 번째 카드는 가로로 꽉 채우기 (선택사항) */
    .link-list li:first-child {
        grid-column: span 2;
    }
}
