let staffData = JSON.parse(localStorage.getItem("staffData")) || [];
let staffList = document.getElementById("staffList");
let addStaff = document.getElementById("addStaff");
let add = "";
function updateStaff() {
  add = "";
  staffData.forEach((e) => {
    add += `<tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.position}</td>
          </tr>`;
  });
  staffList.innerHTML = add;
}
updateStaff();
addStaff.addEventListener("click", function () {
  let inputStaffName = document.getElementById("inputStaffName");
  let inputStaffPosition = document.getElementById("inputStaffPosition");
  if (inputStaffName.value === "" || inputStaffPosition.value === "") {
    alert("Lỗi: Dữ liệu nhập trống");
  } else {
    staffData.push({
      id: staffData.length + 1,
      name: inputStaffName.value,
      position: inputStaffPosition.value,
    });
    localStorage.setItem("staffData", JSON.stringify(staffData));
  }
  inputStaffName.value = "";
  inputStaffPosition.value = "";
  updateStaff();
});
