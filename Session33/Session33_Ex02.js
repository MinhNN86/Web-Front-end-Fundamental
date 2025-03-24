let text = document.getElementById("text");
let check = document.getElementById("kiemTra");
let output = document.getElementById("soLuongKyTu");
check.addEventListener("click", function () {
  let soLuongKyTu = text.value.length;
  output.textContent = soLuongKyTu + " Ký tự";
});
