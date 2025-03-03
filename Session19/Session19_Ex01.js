let thang = +prompt("Nhập vào tháng muốn kiểm tra");

switch (thang) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(`Tháng ${thang} có 31 ngày`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert(`Tháng ${thang} có 30 ngày`);
    break;
  case 2:
    alert("Tháng 2 có 28 hoặc 29 ngày (năm nhuận)");
    break;
  default:
    alert("Tháng không hợp lệ");
    break;
}
