let tuyChon = prompt(` Tùy chọn 
    1. Chuyển VND-->USD
    2. USD-->VND`);
let soTien;
let tienDoi;
switch (tuyChon) {
  case "1":
    soTien = prompt("Nhập số tiền cần đổi");
    tienDoi = soTien / 23000;
    alert(` ${tienDoi} USD`);
    break;
  case "2":
    soTien = prompt("Nhập số tiền cần đổi");
    tienDoi = soTien * 23000;
    alert(` ${tienDoi} VND`);
    break;
  default:
    alert("Nhập sai tùy chọn");
    break;
}
