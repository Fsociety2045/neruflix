// --- 알람 기능 자바스크립트 ---

// 1. 오디오 객체 미리 생성 (경로: js/ -> ../ -> alarm/ -> Goodmorning.mp3)
// [학습 개념] new Audio()
let alarmSound = new Audio('./alarm/DoraEmon.mp3');

// 2. 1초마다 시간을 확인할 타이머의 ID를 저장할 변수
// [학습 개념] 전역 변수
let alarmInterval = null;

/**
 * (실행 1) 알람 아이콘 클릭 시 팝업(모달)을 켜고 끄는 함수
 */
function toggleAlarmModal() {
    const modal = document.getElementById('alarmModal');

  // 현재 팝업이 숨겨져 있는지 확인
  // [학습 개념] .classList.contains()
    if (modal.classList.contains('modal-hidden')) {
    // 숨겨져 있다면 -> 보이게 함
        modal.classList.remove('modal-hidden');
    } else {
    // 보여지고 있다면 -> 숨김
        modal.classList.add('modal-hidden');
    }
}

/**
 * (실행 2) '알람 설정' 버튼 클릭 시
 */
function setAlarm() {
  // 3. 팝업창의 <input>에서 설정한 시간 값을 가져옴 (예: "14:21")
  // [학습 개념] getElementById, .value
    const timeInput = document.getElementById('alarmTimeInput');
    const setTime = timeInput.value;

    if (!setTime) {
        alert("알람 시간을 설정해주세요!");
        return;
    }

  // 4. 이미 설정된 알람이 있다면 중지 (중복 방지)
    if (alarmInterval) {
        clearInterval(alarmInterval); //
    }

  // 5. 1초(1000ms)마다 checkAlarm 함수를 반복 실행
  // [학습 개념] setInterval(함수, 시간)
    alarmInterval = setInterval(function() {
        checkAlarm(setTime);
    }, 1000);

    document.getElementById('alarmStatus').innerHTML = `알람이 ${setTime}에 설정되었습니다.`;
}

/**
 * (실행 3) '알람 해제' 버튼 클릭 시
 */
function clearAlarm() {
    if (alarmInterval) {
        // 6. setInterval()로 시작된 반복 타이머를 중지
        // [학습 개념] clearInterval(ID)
        clearInterval(alarmInterval);
        alarmInterval = null;
        alarmSound.pause(); // 혹시 울리고 있었다면 정지
        alarmSound.currentTime = 0; // 오디오를 처음으로 되감기
        document.getElementById('alarmStatus').innerHTML = "상태: 알람이 해제되었습니다.";
    }
}

/**
 * (실행 4) 1초마다 실행되며 시간을 비교하는 함수
 */
function checkAlarm(setTime) {
  // 7. 현재 시간(시:분)을 가져옴
  // [학습 개념] Date 객체
  const now = new Date(); //
  let hours = now.getHours(); //
  let minutes = now.getMinutes(); //

  // 8. "09"처럼 두 자리로 포맷 맞추기
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    const currentTime = `${hours}:${minutes}`; // 예: "14:21"

  // 9. 현재 시간과 설정한 시간이 일치하는지 확인
  // [학습 개념] if 조건문, === (일치)
    if (currentTime === setTime) {
        console.log("알람 시간입니다!");
        alarmSound.play(); // 오디오 재생
        
        // 알람이 계속 울리지 않도록 타이머 해제
        clearAlarm(); 
        document.getElementById('alarmStatus').innerHTML = "⏰ 알람!! ⏰";
        
        // (선택사항) 알람이 울린 후 팝업창을 1초 뒤에 자동으로 닫기
        // setTimeout(toggleAlarmModal, 1000); 
    }
}