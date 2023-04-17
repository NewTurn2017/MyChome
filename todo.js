// Todo List 출력 함수
function showTodoList() {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [] // 로컬 스토리지에서 Todo List를 가져옴

  const todoListElem = document.getElementById('todoList')
  todoListElem.innerHTML = ''

  todoList.forEach((todo, index) => {
    const li = document.createElement('li')
    // 변경 후
    li.innerHTML = `
<span>${todo}</span>
<button class="deleteBtn" data-index="${index}">x</button>
`
    todoListElem.appendChild(li)
  })

  // 삭제 버튼 클릭 이벤트 핸들러 등록
  const deleteBtns = document.querySelectorAll('.deleteBtn')
  deleteBtns.forEach((btn) => {
    btn.onclick = function () {
      const index = this.dataset.index
      todoList.splice(index, 1)
      localStorage.setItem('todoList', JSON.stringify(todoList)) // 로컬 스토리지에 Todo List를 저장함
      showTodoList()
    }
  })
}

// Todo List 추가 함수
function addTodoList() {
  const todoInput = document.getElementById('todoInput')
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [] // 로컬 스토리지에서 Todo List를 가져옴
  todoList.push(todoInput.value) // 새로운 할 일을 추가함
  localStorage.setItem('todoList', JSON.stringify(todoList)) // 로컬 스토리지에 Todo List를 저장함
  todoInput.value = '' // 입력 필드를 초기화함
  showTodoList()
}

// Todo List 수정 함수
function modifyTodoList(index, value) {
  const oldTodoList = JSON.parse(localStorage.getItem('todoList')) || [] // 로컬 스토리지에서 Todo List를 가져옴
  oldTodoList[index] = value // 할 일을 수정함
  localStorage.setItem('todoList', JSON.stringify(oldTodoList)) // 로컬 스토리지에 Todo List를 저장함
  showTodoList()
}

// Todo List 저장 함수
function saveTodoList() {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [] // 로컬 스토리지에서 Todo List를 가져옴
  const filename = 'todolist.json'
  const blob = new Blob([JSON.stringify(todoList)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
}
// Todo List 불러오기 함수
async function loadTodoList() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'application/json'
  input.onchange = async function () {
    const file = input.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onloadend = async function () {
      if (reader.result) {
        const newTodoList = JSON.parse(reader.result)
        localStorage.setItem('todoList', JSON.stringify(newTodoList)) // 로컬 스토리지에 Todo List를 저장함
        showTodoList()
      }
    }
  }
  input.click()
}

// Todo List Form submit 이벤트 핸들러 등록
const todoForm = document.getElementById('todoForm')
todoForm.onsubmit = function (event) {
  event.preventDefault() // 기본 동작을 막음
  addTodoList()
}

// 저장 버튼 click 이벤트 핸들러 등록
const saveBtn = document.getElementById('saveBtn')
saveBtn.onclick = function () {
  saveTodoList()
}

// 불러오기 버튼 click 이벤트 핸들러 등록
const loadBtn = document.getElementById('loadBtn')
loadBtn.onclick = async function () {
  await loadTodoList()
}

// showTodoList 함수를 최초로 호출하여 화면에 Todo List를 표시함
showTodoList()
