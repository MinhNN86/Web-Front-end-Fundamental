let menu = `1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.`;

function checkInput(input) {
  if (isNaN(input)) {
    return false;
  }
  return true;
}
let case1 = (a, b) => a + b;
let case2 = (a, b) => a - b;
let case3 = (a, b) => a * b;
let case4 = (a, b) => a / b;

let a = +prompt("Nhập phần tử a");
let b = +prompt("Nhập phần tử b");
if (!checkInput(a) || !checkInput(b)) {
  alert("Phần tử không hợp lệ");
} else {
  let result;
  let check = true;
  while (check) {
    let luaChon = +prompt(menu);
    switch (luaChon) {
      case 1: //Cộng hai số.
        result = case1(a, b);
        alert(` ${a} + ${b} = ${result}`);
        break;
      case 2: //Trừ hai số.
        result = case2(a, b);
        alert(` ${a} - ${b} = ${result}`);
        break;
      case 3: //Nhân hai số.
        result = case3(a, b);
        alert(` ${a} * ${b} = ${result}`);
        break;
      case 4: //Chia hai số.
        result = case4(a, b);
        alert(` ${a} / ${b} = ${result.toFixed(2)}`);
        break;
      case 5: //Thoát.
        alert("Tạm biệt");
        check = false;
        break;
      default:
        alert("Lựa chọn không hợp lệ");
        break;
    }
  }
}
