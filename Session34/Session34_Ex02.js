let courses = JSON.parse(localStorage.getItem("courses")) || [];
let editMode = null;

function updateCourses() {
  let displayCourses = document.getElementById("coursesData");
  let add = "";

  courses.forEach((el, index) => {
    add += `
      <tr>
          <td>${index + 1}</td>
          <td>${el.content}</td>
          <td>${el.dueDate}</td>
          <td>${el.status}</td>
          <td>${el.assignedTo}</td>
          <td>
            <button class="btn btn-warning btn-sm edit" data-id="${
              el.id
            }">Sửa</button>
            <button class="btn btn-danger btn-sm delete" data-id="${
              el.id
            }">Xóa</button>
          </td>
      </tr>`;
  });

  displayCourses.innerHTML = add;

  // Xóa khóa học
  let deleteButtons = document.getElementsByClassName("delete");
  for (let btn of deleteButtons) {
    btn.addEventListener("click", function () {
      let id = parseInt(btn.getAttribute("data-id"));
      if (confirm("Chắc chắn xóa khóa học này?")) {
        let index = courses.findIndex((course) => course.id === id);
        if (index !== -1) {
          courses.splice(index, 1);
          saveCourses();
          updateCourses();
        }
      }
    });
  }

  // Sửa khóa học
  let editButtons = document.getElementsByClassName("edit");
  for (let btn of editButtons) {
    btn.addEventListener("click", function () {
      let id = parseInt(btn.getAttribute("data-id"));
      let course = courses.find((course) => course.id === id);

      if (course) {
        document.getElementById("content").value = course.content;
        document.getElementById("date").value = course.dueDate;
        document.getElementById("status").value = course.status;
        document.getElementById("username").value = course.assignedTo;

        editMode = id;
        document.getElementById("submit").innerText = "Cập nhật";
      }
    });
  }
}

function saveCourses() {
  localStorage.setItem("courses", JSON.stringify(courses));
}

// Thêm hoặc cập nhật khóa học
document.getElementById("submit").addEventListener("click", function () {
  let inputContent = document.getElementById("content").value;
  let inputDate = document.getElementById("date").value;
  let inputStatus = document.getElementById("status").value;
  let inputUsername = document.getElementById("username").value;

  if (
    inputContent.trim() === "" ||
    inputDate.trim() === "" ||
    inputStatus === "Choose status" ||
    inputUsername.trim() === ""
  ) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (editMode !== null) {
    let index = courses.findIndex((course) => course.id === editMode);
    if (index !== -1) {
      courses[index] = {
        id: editMode,
        content: inputContent,
        dueDate: inputDate,
        status: inputStatus,
        assignedTo: inputUsername,
      };
    }
    editMode = null;
    document.getElementById("submit").innerText = "Thêm khóa học";
  } else {
    let newCourse = {
      id: courses.length + 1,
      content: inputContent,
      dueDate: inputDate,
      status: inputStatus,
      assignedTo: inputUsername,
    };
    courses.push(newCourse);
  }

  saveCourses();
  updateCourses();

  document.getElementById("content").value = "";
  document.getElementById("date").value = "";
  document.getElementById("status").value = "Choose status";
  document.getElementById("username").value = "";
});

updateCourses();
