let soTienThanhToan = +prompt("Nhập vào số tiền thanh toán");
let thueSuat;
if (soTienThanhToan < 500000) {
  thueSuat = 5;
} else if (soTienThanhToan <= 1000000) {
  thueSuat = 10;
} else {
  thueSuat = 15;
}
let tienThue = (soTienThanhToan * thueSuat) / 100;
let tongGiaTriHoaDon = soTienThanhToan + tienThue;
alert(`Số tiền thanh toán: ${soTienThanhToan} VND
Thuế suất áp dụng: ${thueSuat}%
Tiền thuế: ${tienThue} VND
Tổng giá trị hóa đơn: ${tongGiaTriHoaDon} VND`);
