let n = +prompt("Nhập 1 số nguyên để tính tổng từ 1 đến số đó");
let tong = 0;
if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
  alert("Dữ liệu nhập vào không hợp lệ");
} else {
  for (let i = 1; i <= n; i++) {
    tong += i;
  }
  alert(` Tổng từ 1 đến ${n} là: ${tong}`);
}
