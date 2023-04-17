// Todo List 출력 함수
function showTodoList() {
    const todoList = JSON.parse(localStorage.getItem("todoList")) || []; // 로컬 스토리지에서 Todo List를 가져옴
  
    const todoListElem = document.getElementById("todoList");
    todoListElem.innerHTML = "";
  
    todoList.forEach((todo, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="text" value="${todo}" data-index="${index}">
        <button class="deleteBtn" data-index="${index}">삭제</button>
      `;
      todoListElem.appendChild(li);
    });
  
    // 삭제 버튼 클릭 이벤트 핸들러 등록
    const deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach(btn => {
      btn.onclick = function() {
        const index = this.dataset.index;
        todoList.splice(index, 1);
        showTodoList();
      };
    });
  }
  
  // Todo List 추가 함수
  function addTodoList() {
    const todoInput = document.getElementById("todoInput");
    const todoList = JSON.parse(localStorage.getItem("todoList")) || []; // 로컬 스토리지에서 Todo List를 가져옴
    todoList.push(todoInput.value); // 새로운 할 일을 추가함
    localStorage.setItem("todoList", JSON.stringify(todoList)); // 로컬 스토리지에 Todo List를 저장함
    todoInput.value = ""; // 입력 필드를 초기화함
    showTodoList();
  }
  
  // Todo List 수정 함수
  function modifyTodoList(index, value) {
    const todoList =
  