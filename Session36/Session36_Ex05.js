let taskData = JSON.parse(localStorage.getItem("taskData")) || [];
let pendingTasks = document.getElementById("pendingTasks");
let inProgressTasks = document.getElementById("inProgressTasks");
let doneTasks = document.getElementById("doneTasks");

function displayWork() {
  pendingTasks.innerHTML = "";
  inProgressTasks.innerHTML = "";
  doneTasks.innerHTML = "";

  taskData.forEach((e, i) => {
    let taskHTML = `
      <div class="task">
          <p>${e.content}</p>
          ${
            e.status !== "done"
              ? `<button data-id="${i}">Chuyển tiếp</button>`
              : ""
          }
      </div>`;

    if (e.status === "pending") {
      pendingTasks.innerHTML += taskHTML;
    } else if (e.status === "inProgress") {
      inProgressTasks.innerHTML += taskHTML;
    } else {
      doneTasks.innerHTML += taskHTML;
    }
  });
}

function updateTaskData() {
  localStorage.setItem("taskData", JSON.stringify(taskData));
}

displayWork();

document.getElementById("addTask").addEventListener("click", function () {
  let inputTask = document.getElementById("taskName");
  if (inputTask.value === "") {
    alert("Công việc trống");
  } else {
    taskData.push({
      content: inputTask.value,
      status: "pending",
    });
    updateTaskData();
    displayWork();
    inputTask.value = "";
  }
});

document.addEventListener("click", function (event) {
  if (
    event.target.tagName === "BUTTON" &&
    event.target.hasAttribute("data-id")
  ) {
    let taskIndex = event.target.getAttribute("data-id");
    if (taskData[taskIndex].status === "pending") {
      taskData[taskIndex].status = "inProgress";
    } else if (taskData[taskIndex].status === "inProgress") {
      taskData[taskIndex].status = "done";
    }
    updateTaskData();
    displayWork();
  }
});
