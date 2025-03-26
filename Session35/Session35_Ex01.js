let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
let taskList = document.getElementById("taskList");
let btnAdd = document.getElementById("btnAdd");

function displayToDoList() {
  let content = "";
  taskList.innerHTML = "";
  toDoList.forEach((e, i) => {
    content += `
      <li class="list-group-item task-item">
        <span>${e}</span>
        <div class="task-buttons">
          <button type="button" class="btn btn-warning btn-edit" data-id="${i}">Sửa</button>
          <button type="button" class="btn btn-danger btn-delete" data-id="${i}">Xóa</button>
        </div>
      </li>`;
  });
  taskList.innerHTML = content;

  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", function () {
      let index = this.getAttribute("data-id");
      toDoList.splice(index, 1);
      saveToDoList();
      displayToDoList();
    });
  });

  document.querySelectorAll(".btn-edit").forEach((btn) => {
    btn.addEventListener("click", function () {
      let index = this.getAttribute("data-id");
      let newTask = prompt("Sửa nhiệm vụ:", toDoList[index]);
      if (newTask !== null && newTask.trim() !== "") {
        toDoList[index] = newTask.trim();
        saveToDoList();
        displayToDoList();
      }
    });
  });
}

function saveToDoList() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

btnAdd.addEventListener("click", function () {
  let inputTask = document.getElementById("inputTask");
  let taskValue = inputTask.value.trim();

  if (taskValue === "") {
    alert("Nhiệm vụ còn trống!");
    return;
  }

  toDoList.push(taskValue);
  saveToDoList();
  displayToDoList();
  inputTask.value = "";
});

displayToDoList();
