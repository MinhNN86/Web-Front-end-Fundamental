let arr = [];
let n = +prompt("Nhập số phần tử chuỗi trong mảng");
if (!Number.isInteger(n) || n < 0) {
  alert("Dữ liệu không hợp lệ");
} else if (n === 0) {
  alert("Mảng không có phần tử nào");
} else {
  for (let i = 0; i < n; i++) {
    let input = prompt(`Nhập chuỗi thứ ${i} vào mảng`);
    arr.push(input);
  }
  let result = arr.filter((el) => el.length > 5);
  alert(
    result.length > 0
      ? `${result}`
      : "Mảng không có chuỗi có độ dài lớn hơn 5 ký tự"
  );
}
