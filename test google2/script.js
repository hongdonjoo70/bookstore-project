document.addEventListener('DOMContentLoaded', () => {
    // 검색 기능
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', () => {
        const keyword = searchInput.value.trim();
        if (keyword === '') {
            alert('검색어를 입력해주세요.');
        } else {
            alert(`"${keyword}"에 대한 검색을 시작합니다.`);
            // 실제 구현에서는 검색 페이지로 이동
            // window.location.href = `/search?q=${encodeURIComponent(keyword)}`;
        }
    });

    // 검색창에서 엔터키 입력 시 검색 실행
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // 히어로 슬라이더 호버 이펙트 콘솔 로그 (예시 동작)
    const heroItems = document.querySelectorAll('.hero-item img');
    heroItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            console.log(`배너 ${index + 1} 호버됨`);
        });
    });
});