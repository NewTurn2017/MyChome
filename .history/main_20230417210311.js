// 로그인 폼 열기
const loginModal = document.getElementById('loginModal')
const loginBtn = document.getElementById('loginBtn')
const closeBtn = document.querySelector('.close')

loginBtn.onclick = function () {
  loginModal.style.display = 'block'
}

// 로그인 폼 닫기
closeBtn.onclick = function () {
  loginModal.style.display = 'none'
}

// 로그인 폼 전송
const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', function (event) {
  event.preventDefault() // 폼 기본 동작 중단

  // 입력된 아이디와 비밀번호 가져오기
  const username = loginForm.username.value
  const password = loginForm.password.value

  // 아이디와 비밀번호 검증
  if (validateUser(username, password)) {
    alert('로그인되었습니다.')
    loginModal.style.display = 'none'
    // 로그인 성공 시 mainContent div를 표시함
    document.getElementById('mainContent').style.display = 'block'
  } else {
    alert('아이디 또는 비밀번호가 올바르지 않습니다.')
  }
})
