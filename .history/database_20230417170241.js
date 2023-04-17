const users = [
  {
    username: 'admin',
    password: '1234',
  },
  {
    username: 'user',
    password: '5678',
  },
]
// 아이디와 비밀번호 검증 함수
function validateUser(username, password) {
  // users 배열에서 입력된 아이디와 비밀번호가 일치하는 객체 검색
  const user = users.find(
    (user) => user.username === username && user.password === password
  )

  // 일치하는 객체가 있다면 true를 반환, 그렇지 않으면 false를 반환
  return user ? true : false
}

// 입력된 아이디와 비밀번호 가져오기
const username = loginForm.username.value
const password = loginForm.password.value

// 아이디와 비밀번호 검증
if (validateUser(username, password)) {
  alert('로그인되었습니다.')
  loginModal.style.display = 'none'
} else {
  alert('아이디 또는 비밀번호가 올바르지 않습니다.')
}
