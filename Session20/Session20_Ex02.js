let n = +prompt("Nhập một số nguyên N:");
let result = [];

if (isNaN(n) || n < 1 || !Number.isInteger(n)) {
  alert("Dữ liệu nhập vào không hợp lệ");
} else {
  for (let i = 5; i <= n; i += 5) {
    result.push(i);
  }
  alert(`Các số chia hết cho 5 từ 1 đến ${n} là: ${result.join(", ")}`);
}
