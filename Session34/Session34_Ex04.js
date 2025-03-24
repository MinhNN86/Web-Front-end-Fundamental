let todoInput = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");
let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

function saveToLocalStorage() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

function addTodoItem(task) {
  let li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `${task} <button class="btn-delete">Xóa</button>`;

  li.querySelector(".btn-delete").addEventListener("click", function () {
    let index = toDoList.indexOf(task);
    if (index !== -1) {
      toDoList.splice(index, 1);
      saveToLocalStorage();
    }
    li.remove();
  });

  todoList.appendChild(li);
}

function renderTodoList() {
  todoList.innerHTML = "";
  toDoList.forEach(addTodoItem);
}

addBtn.addEventListener("click", function () {
  let task = todoInput.value.trim();
  if (task !== "") {
    toDoList.push(task);
    saveToLocalStorage();
    addTodoItem(task);
    todoInput.value = "";
  }
});

renderTodoList();
