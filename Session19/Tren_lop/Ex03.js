let soDu = +prompt("Nhập vào số dư của tài khoản");
let tuyChon = prompt(`Chọn thao tác:
1. Rút tiền
2. Nạp tiền`);

let soTien;
switch (tuyChon) {
  case "1":
    soTien = +prompt("Nhập số tiền cần rút");
    if (isNaN(soTien) || soTien <= 0) {
      alert("Lỗi: Số tiền không hợp lệ!");
      break;
    }
    if (soTien > soDu) {
      alert("Lỗi: Số tiền rút lớn hơn số dư!");
      break;
    }
    soDu -= soTien;
    alert(`Số dư còn lại là ${soDu}`);
    break;

  case "2":
    soTien = +prompt("Nhập số tiền cần nạp");
    if (isNaN(soTien) || soTien <= 0) {
      alert("Lỗi: Số tiền không hợp lệ!");
      break;
    }
    soDu += soTien;
    alert(`Số dư sau khi nạp là ${soDu}`);
    break;

  default:
    alert("Lựa chọn không hợp lệ! Vui lòng chọn 1 hoặc 2.");
    break;
}
