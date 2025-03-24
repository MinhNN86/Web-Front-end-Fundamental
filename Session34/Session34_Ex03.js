let submit = document.getElementById("submit");
let accountStorage = JSON.parse(localStorage.getItem("accountStorage"));

submit.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let searchAccount = accountStorage.filter((e) => e.email === email);

  if (searchAccount.length < 1) {
    alert("Không tìm thấy tài khoản");
  } else if (searchAccount[0].password !== password) {
    alert("Mật khẩu sai");
  } else {
    alert("Đăng nhập thành công!");
    window.location.href = "Session34_Ex02.html";
  }
});
