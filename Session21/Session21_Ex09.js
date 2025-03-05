let input = +prompt("Nhập số bất kì để kiểm tra số nguyên");
let check = true;
if (!Number.isInteger(input)) {
  alert("Lỗi");
} else {
  if (input < 2) {
    check = false;
  } else {
    for (let i = 2; i < input; i++) {
      if (input % i === 0) {
        check = false;
        break;
      }
    }
  }
  if (check) {
    alert("Là số nguyên tố");
  } else {
    alert("Không phải là số nguyên tố");
  }
}
