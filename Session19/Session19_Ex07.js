let a = +prompt("Nhập số thứ 1");
let b = +prompt("Nhập số thứ 2");
let c = +prompt("Nhập số thứ 3");

let max = a > b ? (a > c ? a : c) : b > c ? b : c;

alert(`Số lớn nhất trong 3 số là ${max}`);
