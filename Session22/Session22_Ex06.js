let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let count = 0;
let input = +prompt("Nhập số nguyên bất kì");
if (isNaN(input) || !Number.isInteger(input)) {
  alert("Dữ liệu nhập vào không hợp lệ");
} else {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === input) {
      count++;
    }
  }
}
if (count != 0) {
  alert(` Số ${input} xuất hiện ${count} lần trong mảng `);
} else {
  alert(` Số ${input} không tồn tại trong mảng `);
}
