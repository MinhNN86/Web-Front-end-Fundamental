let toDoList = [];
let inputMission = document.getElementById("inputList");
let addMission = document.getElementById("add");
let list = document.getElementById("listMission");
let xacNhanXoa = document.getElementById("overLay");
let keep = document.getElementById("keep");
let remove = document.getElementById("delete");

addMission.addEventListener("click", function () {
  let mission = inputMission.value.trim();
  if (mission === "") {
    alert("Lỗi: Không thêm được, nhiệm vụ trống");
    return;
  }

  toDoList.push(mission);
  inputMission.value = "";

  let taskItem = document.createElement("div");
  taskItem.classList.add("list");
  taskItem.innerHTML = `${mission} <span class="delete">&times;</span>`;
  list.appendChild(taskItem);

  let deleteButton = taskItem.querySelector(".delete");

  deleteButton.removeEventListener("click", handleDelete);
  deleteButton.addEventListener("click", handleDelete);

  function handleDelete() {
    xacNhanXoa.style.display = "flex";
    keep.onclick = function () {
      xacNhanXoa.style.display = "none";
    };
    remove.onclick = function () {
      let index = toDoList.indexOf(mission);
      if (index !== -1) {
        toDoList.splice(index, 1);
      }
      taskItem.remove();
      xacNhanXoa.style.display = "none";
    };
  }
});
