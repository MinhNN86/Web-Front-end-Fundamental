let matKhau = "Admin123";
let check = false;
while (check === false) {
  let input = prompt("Nhập mật khẩu");
  if (input === matKhau) {
    check = true;
    alert("Welcome");
  } else {
    alert("Nhập sai mật khẩu vui lòng nhập lại");
  }
}
