// 로그인 폼 전송
const loginForm = document.getElementById('loginForm')
const loginContainer = document.getElementById('loginContainer')

loginForm.addEventListener('submit', function (event) {
  event.preventDefault() // 폼 기본 동작 중단

  // 입력된 아이디와 비밀번호 가져오기
  const username = loginForm.username.value
  const password = loginForm.password.value

  // 아이디와 비밀번호 검증
  if (validateUser(username, password)) {
    alert('로그인되었습니다.')
    // 로그인 성공 시 mainContent div를 표시함
    document.getElementById('mainContent').style.display = 'block'
    document.getElementById('loginContainer').style.display = 'none'

    // 로그인 상태를 localStorage에 저장
    localStorage.setItem('isLoggedIn', true)
  } else {
    alert('아이디 또는 비밀번호가 올바르지 않습니다.')
  }
})

// 페이지 로드 시 로그인 상태 확인
document.addEventListener('DOMContentLoaded', function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  if (isLoggedIn === 'true') {
    // 로그인된 상태이면 mainContent를 표시하고 loginContainer를 숨김
    document.getElementById('mainContent').style.display = 'block'
    document.getElementById('loginContainer').style.display = 'none'
  } else {
    // 로그인되지 않은 상태이면 mainContent를 숨기고 loginContainer를 표시
    document.getElementById('mainContent').style.display = 'none'
    document.getElementById('loginContainer').style.display = 'block'
  }
})
