let tenDangNhap = prompt("Nhập tên đăng nhập của bạn");
let matKhau;
if (tenDangNhap === "ADMIN") {
  matKhau = prompt("Nhập mật khẩu");
  if (matKhau === "TheMaster") {
    alert("Welcome");
  } else if (matKhau === null) {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (tenDangNhap === null) {
  alert("Cancelled");
} else {
  alert("I Don’t know you");
}
