function checkSoNguyenTo(num) {
  if (isNaN(num)) {
    return "Dữ liệu không hợp lệ";
  }
  let check = true;
  if (num < 2) {
    check = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        check = false;
      }
    }
  }
  if (check) {
    return "là số nguyên tố";
  } else {
    return "không phải là số nguyên tố";
  }
}
console.log(checkSoNguyenTo(17));
console.log(checkSoNguyenTo(6));
console.log(checkSoNguyenTo("text"));
