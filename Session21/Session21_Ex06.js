let input = +prompt("Nhập vào số nguyên bất kỳ");
let mangUoc = [];
if (!Number.isInteger(input) || input <= 0) {
  alert("Dữ liệu nhập vào không hợp lệ");
} else {
  for (let i = 1; i <= input; i++) {
    if (input % i === 0) {
      mangUoc.push(i);
    }
  }
  alert(`Ước của số ${input} là: ${mangUoc.join(", ")}`);
}
