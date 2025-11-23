// =======================================================
// JavaScript 기능 (mainscript.js) - 최종 버전
// =======================================================

// 1. 스크롤 시 네비게이션 배경 변경 효과 (header 태그에 적용)
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 100) {
    nav.style.background = "rgba(0,0,0,0.95)";
  } else {
    nav.style.background = "rgba(0,0,0,0.8)";
  }
});

// 2. 배너 비디오 제어
const banner = document.querySelector(".banner");
const video = document.querySelector(".banner-video");

if (banner && video) {
  // 마우스 올리면 재생, 벗어나면 일시정지
  banner.addEventListener("mouseenter", () => {
    video.play();
  });

  banner.addEventListener("mouseleave", () => {
    video.pause();
  });
}

// 3. 슬라이더 버튼 클릭 기능 (정상 작동 로직)
document.addEventListener("DOMContentLoaded", () => {
  const slideButtons = document.querySelectorAll(".slide-btn");

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. 타겟 ID를 가져옴 (data-target)
      const targetId = button.getAttribute("data-target");
      const row = document.getElementById(targetId);

      if (!row) {
        console.error(`Slider target not found: #${targetId}`);
        return;
      }

      // 2. 스크롤 이동 거리 계산: row 컨테이너 너비의 90%를 이동 거리로 설정
      const scrollDistance = row.clientWidth * 0.9;

      if (button.classList.contains("left-btn")) {
        // 왼쪽 버튼: 왼쪽으로 이동
        row.scrollBy({
          left: -scrollDistance,
          behavior: "smooth",
        });
      } else if (button.classList.contains("right-btn")) {
        // 오른쪽 버튼: 오른쪽으로 이동
        row.scrollBy({
          left: scrollDistance,
          behavior: "smooth",
        });
      }
    });
  });
});
