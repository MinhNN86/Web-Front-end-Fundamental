let productData = JSON.parse(localStorage.getItem("productData")) || [];
let listProduct = document.getElementById("listProduct");
let addButton = document.getElementById("addCategory");

function displayProduct() {
  listProduct.innerHTML = "";
  productData.forEach((e, index) => {
    listProduct.innerHTML += `
      <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>
          <span class="${
            e.status === "Đang hoạt động"
              ? "badge bg-success"
              : "badge bg-danger"
          }">${e.status}</span>
        </td>
        <td>
          <button class="btn btn-outline-danger btn-sm delete" data-id="${index}">🗑</button>
          <button class="btn btn-outline-warning btn-sm edit" data-id="${index}" data-bs-toggle="modal" data-bs-target="#categoryModal">✏</button>
        </td>
      </tr>
    `;
  });
  addEventListeners();
}

function addEventListeners() {
  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", (e) => {
      let index = e.target.getAttribute("data-id");
      if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
        productData.splice(index, 1);
        localStorage.setItem("productData", JSON.stringify(productData));
        displayProduct();
      }
    });
  });
  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", (e) => {
      let index = e.target.getAttribute("data-id");
      let item = productData[index];
      document.getElementById("categoryId").value = item.id;
      document.getElementById("categoryName").value = item.name;
      document.querySelectorAll("input[name='status']").forEach((radio) => {
        if (radio.value === item.status) radio.checked = true;
      });
      addButton.setAttribute("data-edit-index", index);
    });
  });
}
addButton.addEventListener("click", () => {
  let id = document.getElementById("categoryId").value.trim();
  let name = document.getElementById("categoryName").value.trim();
  let status = document.querySelector("input[name='status']:checked").value;
  document.getElementById("categoryId").style.border = "";
  document.getElementById("categoryName").style.border = "";
  document.getElementById("errorCategoryId").innerHTML = "";
  document.getElementById("errorCategoryName").innerHTML = "";
  let hasError = false;
  if (!id) {
    document.getElementById("categoryId").style.border = "1px solid red";
    document.getElementById("errorCategoryId").innerHTML =
      "Mã danh mục không được để trống";
    hasError = true;
  }
  if (!name) {
    document.getElementById("categoryName").style.border = "1px solid red";
    document.getElementById("errorCategoryName").innerHTML =
      "Tên danh mục không được để trống";
    hasError = true;
  }
  if (hasError) return;
  let editIndex = addButton.getAttribute("data-edit-index");
  if (editIndex) {
    productData[editIndex] = { id, name, status };
    addButton.removeAttribute("data-edit-index");
  } else {
    productData.push({ id, name, status });
  }
  localStorage.setItem("productData", JSON.stringify(productData));
  displayProduct();
  document.getElementById("categoryForm").reset();
  bootstrap.Modal.getInstance(document.getElementById("categoryModal")).hide();
});
displayProduct();

let search = document.getElementById("search");
search.addEventListener("click", function () {
  let inputSearch = document
    .getElementById("inputSearch")
    .value.trim()
    .toLowerCase();
  let statusSearch = document.getElementById("statusSearch").value;
  let filteredData = productData.filter((item) => {
    let matchesSearch = item.name.toLowerCase().includes(inputSearch);
    let matchesStatus =
      statusSearch === "Tất cả" || item.status === statusSearch;
    return matchesSearch && matchesStatus;
  });
  if (filteredData.length === 0) {
    alert("Không tìm thấy danh mục phù hợp!");
  }
  listProduct.innerHTML = "";
  filteredData.forEach((e, index) => {
    listProduct.innerHTML += `
      <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>
          <span class="${
            e.status === "Đang hoạt động"
              ? "badge bg-success"
              : "badge bg-danger"
          }">${e.status}</span>
        </td>
        <td>
          <button class="btn btn-outline-danger btn-sm delete" data-id="${index}">🗑</button>
          <button class="btn btn-outline-warning btn-sm edit" data-id="${index}" data-bs-toggle="modal" data-bs-target="#categoryModal">✏</button>
        </td>
      </tr>
    `;
  });
  addEventListeners();
});
