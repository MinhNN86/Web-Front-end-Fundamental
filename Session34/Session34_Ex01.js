let accountStorage = JSON.parse(localStorage.getItem("accountStorage")) || [];
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  if (email.value.trim() === "") {
    alert("Email bị bỏ trống");
    return;
  }
  if (password.value.trim() === "") {
    alert("Mật khẩu bị bỏ trống");
    return;
  }
  if (confirmPassword.value !== password.value) {
    alert("Xác nhận mật khẩu không khớp");
    return;
  }
  let kiemTraEmail = accountStorage.some((el) => el.email === email.value);
  if (kiemTraEmail) {
    alert("Email này đã tồn tại");
    return;
  }
  let newAccount = {
    email: email.value,
    password: password.value,
  };
  accountStorage.push(newAccount);
  localStorage.setItem("accountStorage", JSON.stringify(accountStorage));
  alert("Đăng ký thành công");
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
});
