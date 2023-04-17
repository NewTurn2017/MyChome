// 시계 출력 함수
function showClock() {
  const now = new Date() // 현재 시간을 가져옴
  const hour = now.getHours() // 시간을 가져옴
  const minute = now.getMinutes() // 분을 가져옴
  const second = now.getSeconds() // 초를 가져옴

  const clock = document.getElementById('clock')
  clock.textContent = `${hour < 10 ? '0' + hour : hour}:${
    minute < 10 ? '0' + minute : minute
  }:${second < 10 ? '0' + second : second}`

  // 1초마다 showClock 함수를 호출하여 시간을 업데이트 함
  setTimeout(showClock, 1000)
}

// showClock 함수를 최초로 호출하여 화면에 시계를 표시함
showClock()
