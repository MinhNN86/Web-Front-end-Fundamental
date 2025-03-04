let n = +prompt("Nhập số n (số lượng số Fibonacci cần hiển thị)");
if (!Number.isInteger(n) || n <= 0) {
  alert("Không hợp lệ");
} else {
  let fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  alert(fib.join(" "));
}
