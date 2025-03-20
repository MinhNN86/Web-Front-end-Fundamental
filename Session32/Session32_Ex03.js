let arr = [
  { id: 1, mon: "Toán" },
  { id: 2, mon: "Lý" },
  { id: 3, mon: "Hóa" },
];
let themMonHoc = document.getElementById("themMonHoc");
let monHocThem = document.getElementById("nhapMonHoc");
let danhSachMon = document.getElementById("danhSachMonHoc");
function capNhatDanhSach() {
  let add = "";
  arr.forEach((el) => {
    add += `<p>${el.id}. ${el.mon}</p>`;
  });
  danhSachMon.innerHTML = add;
}
capNhatDanhSach();
themMonHoc.addEventListener("click", function () {
  let monHocMoi = monHocThem.value.trim();
  if (monHocMoi === "") {
    alert("Tên môn học không được để trống!");
    return;
  }
  let inputId = arr[arr.length - 1].id + 1;
  arr.push({ id: inputId, mon: monHocMoi });

  capNhatDanhSach();
  monHocThem.value = "";
});
