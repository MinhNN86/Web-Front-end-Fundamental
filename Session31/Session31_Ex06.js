let usernameCorrect = "huanrose@gmail.com";
let passwordCorrect = "123456";
let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let usernameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;
  if (usernameInput === usernameCorrect && passwordInput === passwordCorrect) {
    console.log("Đăng nhập thành công!");
    alert("Đăng nhập thành công!");
  } else {
    console.log("Đăng nhập thất bại!");
    alert("Sai tài khoản hoặc mật khẩu!");
  }
});
