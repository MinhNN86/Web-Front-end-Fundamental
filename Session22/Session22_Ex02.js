let numbers = [2, 5, 7, 4, 1, 8, 6];
let input = +prompt("Nhập vào số bất kỳ");
let check = false;
if (isNaN(input)) {
  alert("Nhập vào không phải là số");
} else {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === input) {
      check = true;
      alert("Bingo");
      break;
    }
  }
  if (!check) {
    alert("Chúc bạn may mắn lần sau");
  }
}
