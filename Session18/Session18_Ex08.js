let a = +prompt("Nhập độ dài cạnh a:");
let b = +prompt("Nhập độ dài cạnh b:");
let c = +prompt("Nhập độ dài cạnh c:");
if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    alert("Đây là một tam giác đều.");
  } else if (a === b || a === c || b === c) {
    alert("Đây là một tam giác cân.");
  } else if (
    a ** 2 + b ** 2 === c ** 2 ||
    a ** 2 + c ** 2 === b ** 2 ||
    b ** 2 + c ** 2 === a ** 2
  ) {
    alert("Đây là một tam giác vuông.");
  } else {
    alert("Đây là một tam giác thường.");
  }
} else {
  alert("Ba cạnh này không tạo thành một tam giác.");
}
