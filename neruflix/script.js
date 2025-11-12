// 스크롤 시 네비게이션 배경 변경 효과
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(0,0,0,0.95)';
  } else {
    nav.style.background = 'rgba(0,0,0,0.8)';
  }
});
