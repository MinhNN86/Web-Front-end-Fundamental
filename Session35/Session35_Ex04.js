let staffData = JSON.parse(localStorage.getItem("staffData")) || [];
let staffList = document.getElementById("staffList");
let addStaff = document.getElementById("addStaff");
let pagination = document.getElementById("pagination");

const itemsPerPage = 3;
let currentPage = 1;

function updateStaff() {
  let start = (currentPage - 1) * itemsPerPage;
  let end = start + itemsPerPage;
  let paginatedItems = staffData.slice(start, end);
  let add = "";
  paginatedItems.forEach((e) => {
    add += `<tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.position}</td>
          </tr>`;
  });
  staffList.innerHTML = add;
  updatePagination();
}

function updatePagination() {
  let totalPages = Math.ceil(staffData.length / itemsPerPage);
  let paginationHTML = "";

  paginationHTML += `<li class="page-item ${
    currentPage === 1 ? "disabled" : ""
  }">                 
                      <a class="page-link" href="#" onclick="changePage(${
                        currentPage - 1
                      })">&lt</a>
                    </li>`;

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<li class="page-item ${
      currentPage === i ? "active" : ""
    }">
                        <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                      </li>`;
  }
  paginationHTML += `<li class="page-item ${
    currentPage === totalPages ? "disabled" : ""
  }">
                      <a class="page-link" href="#" onclick="changePage(${
                        currentPage + 1
                      })">&gt</a>
                    </li>`;
  pagination.innerHTML = paginationHTML;
}

function changePage(page) {
  let totalPages = Math.ceil(staffData.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  updateStaff();
}

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

updateStaff();
