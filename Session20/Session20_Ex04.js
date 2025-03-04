let str = prompt("Nhập 1 chuỗi");
let search = prompt("Nhập ký tự để tìm kiếm chuỗi vừa nhập");
let found = false;
for (let i = 0; i < str.length; i++) {
  if (str[i] === search) {
    found = true;
    break;
  }
}
if (found) {
  alert("Tồn tại từ cần tìm kiếm");
} else {
  alert("Không tồn tại từ cần tìm kiếm");
}
