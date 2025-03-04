let a = +prompt("Nhập số a");
let b = +prompt("Nhập số mũ của số a");

if (isNaN(a) || isNaN(b)) {
  alert("Không hợp lệ");
} else {
  let ketQua = 1;
  for (let i = 0; i < b; i++) {
    ketQua *= a;
  }
  alert(ketQua);
}
