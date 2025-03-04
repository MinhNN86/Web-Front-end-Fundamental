let soLuong = +prompt("Nhập số nguyên tố hiện trên màn hình");
if (!Number.isInteger(soLuong) || soLuong <= 0) {
  alert("Số nhập vào không hợp lệ");
} else {
  let ketQua = [];
  let num = 2;
  while (ketQua.length < soLuong) {
    let soNguyenTo = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        soNguyenTo = false;
        break;
      }
    }
    if (soNguyenTo) {
      ketQua.push(num);
    }
    num++;
  }
  alert(`Các số nguyên tố đầu tiên: ${ketQua.join(" ")}`);
}
