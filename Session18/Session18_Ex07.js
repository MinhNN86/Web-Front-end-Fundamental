let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let phepTinh = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");
let ketQua;
switch (phepTinh) {
  case "+":
    ketQua = a + b;
    alert(`Kết quả của phép tính trên: a + b = ${ketQua}`);
    break;
  case "-":
    ketQua = a - b;
    alert(` Kết quả của phép tính trên: a - b = ${ketQua}`);
    break;
  case "*":
    ketQua = a * b;
    alert(` Kết quả của phép tính trên: a * b = ${ketQua}`);
    break;
  case "/":
    ketQua = a / b;
    alert(` Két quả của phép tính trên: a / b = ${ketQua}`);
    break;
  default:
    alert(` Vui lòng nhập đúng phép tính`);
}
