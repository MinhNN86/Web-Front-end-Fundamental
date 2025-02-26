let a = Number(prompt("nhập số a"));
let b = Number(prompt("nhập số b"));
let c = Number(prompt("nhập số c"));
if (a >= b && a >= c) {
  alert("Số a là số lớn nhất");
} else if (b >= a && b >= c) {
  alert("Số b là số lớn nhất");
} else {
  alert("Số c là số lớn nhất");
}
