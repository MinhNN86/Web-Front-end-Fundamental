let mangNhap = [];
let n,
  tong = 0;
for (let i = 0; i < 5; ) {
  n = +prompt("Nhập số nguyên");
  if (!Number.isInteger(n) || isNaN(n)) {
    alert("Số nhập vào không hợp lệ");
  } else {
    mangNhap.push(n);
    i++;
  }
}
for (let i = 0; i < 5; i++) {
  if (mangNhap[i] % 2 !== 0) {
    tong += mangNhap[i];
  }
}
alert(` Tổng các số lẻ tỏng các số đã nhập là ${tong}`);
