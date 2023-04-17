const users = [
  {
    username: 'admin',
    password: '1234',
  },
]

function validateUser(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  )

  return user ? true : false
}
