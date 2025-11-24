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
document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // 1. 슬라이드 버튼 기능 (기존 코드 유지)
    // ============================================
    const slideButtons = document.querySelectorAll('.slide-btn');

    slideButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const row = document.getElementById(targetId);

            if (row) {
                const scrollAmount = window.innerWidth * 0.8; // 화면의 80%만큼 스크롤
                
                if (button.classList.contains('right-btn')) {
                    row.scrollLeft += scrollAmount;
                } else if (button.classList.contains('left-btn')) {
                    row.scrollLeft -= scrollAmount;
                }
            }
        });
    });

    // ============================================
    // 2. 넷플릭스 상세 팝업 기능 (새로 추가됨)
    // ============================================
    const modalOverlay = document.getElementById('netflix-modal');
    const modalCloseBtn = document.querySelector('.modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalVideoContainer = document.getElementById('modal-video-container');
    const modalBannerArea = document.querySelector('.modal-banner-area');

    // 클릭 이벤트를 걸어줄 모든 콘텐츠 이미지 선택
    // (movie-row, short-card, mini-card 안에 있는 모든 이미지)
    const contentImages = document.querySelectorAll('.movie-row img, .short-card img, .mini-card img');

    contentImages.forEach(img => {
        img.addEventListener('click', () => {
            // 썸네일 클릭 시에는 이미지 모달을 사용하므로 비디오 상태를 정리
            if (modalVideoContainer) {
                modalVideoContainer.classList.remove('active');
                modalVideoContainer.innerHTML = '';
            }
            if (modalBannerArea) {
                modalBannerArea.classList.remove('hidden');
            }

            // 1. 클릭한 이미지의 정보 가져오기
            const imgSrc = img.src;
            const imgTitle = img.alt || '상세 정보'; // alt가 없으면 기본 텍스트

            // 2. 모달에 정보 넣기
            modalImg.src = imgSrc;
            modalTitle.textContent = imgTitle;

            // 3. 모달 보여주기
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // 배경 스크롤 막기
        });
    });

    // 닫기 버튼 클릭 시
    modalCloseBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // 스크롤 풀기
        if (modalVideoContainer) {
            modalVideoContainer.classList.remove('active');
            modalVideoContainer.innerHTML = '';
        }
        if (modalBannerArea) {
            modalBannerArea.classList.remove('hidden');
        }
    });

    // 모달 바깥 배경 클릭 시 닫기
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            if (modalVideoContainer) {
                modalVideoContainer.classList.remove('active');
                modalVideoContainer.innerHTML = '';
            }
            if (modalBannerArea) {
                modalBannerArea.classList.remove('hidden');
            }
        }
    });

    // 배너 재생 버튼을 눌렀을 때 유튜브 영상을 모달로 표시
    const bannerPlayBtn = document.querySelector('.banner-content .play');
    const youtubeEmbedUrl = 'https://www.youtube.com/embed/mo1_AyxW-Zk?autoplay=1&si=ySaiy-qsWtnY_5IQ';

    if (bannerPlayBtn) {
        bannerPlayBtn.addEventListener('click', () => {
            if (modalOverlay) {
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            if (modalVideoContainer) {
                modalVideoContainer.innerHTML = `<iframe class="modal-iframe" src="${youtubeEmbedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
                modalVideoContainer.classList.add('active');
            }

            if (modalBannerArea) {
                modalBannerArea.classList.add('hidden');
            }
        });
    }
});
