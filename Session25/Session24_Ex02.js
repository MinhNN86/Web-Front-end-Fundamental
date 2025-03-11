function tinhTong(number1, number2) {
  if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
    return "Dữ liệu không hợp lệ";
  } else {
    return number1 + number2;
  }
}
console.log(tinhTong(2, 6));
console.log(tinhTong(3, "text"));
