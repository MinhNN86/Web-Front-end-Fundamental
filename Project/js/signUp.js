// Hàm hiển thị thông báo với CSS animation
function showNotification(element) {
  element.style.display = "flex";
  // Thêm class để chạy animation
  element.classList.add("slide-in");
  // Loại bỏ class sau khi animation kết thúc, để có thể dùng lại
  setTimeout(() => {
    element.classList.remove("slide-in");
  }, 300);
}

// Hàm ẩn thông báo với CSS animation
function hideNotification(element) {
  element.classList.add("slide-out");
  // Sau khi animation ẩn kết thúc, ẩn phần tử khỏi trang
  setTimeout(() => {
    element.style.display = "none";
    element.classList.remove("slide-out");
  }, 300);
}

let accountData = JSON.parse(localStorage.getItem("accountData")) || [];
let favoriteRecipeData =
  JSON.parse(localStorage.getItem("favoriteRecipeData")) || [];
document.getElementById("btn-singUp").addEventListener("click", function () {
  let error = document.querySelector(".error");
  let inputEmail = document.getElementById("inputEmail").value.trim();
  let inputUsername = document.getElementById("inputUsername").value.trim();
  let inputPassword = document.getElementById("inputPassword").value.trim();
  let inputConfirmPassword = document
    .getElementById("inputConfirmPassword")
    .value.trim();
  let inputError = document.getElementById("inputError");
  inputError.innerHTML = "";
  let check = true;

  // Kiểm tra username
  if (inputUsername === "") {
    inputError.innerHTML += "Username không được bỏ trống <br />";
    check = false;
  }

  // Kiểm tra email
  if (inputEmail === "") {
    inputError.innerHTML += "Email không được bỏ trống <br />";
    check = false;
  } else if (!document.getElementById("inputEmail").checkValidity()) {
    inputError.innerHTML += "Email không đúng định dạng <br />";
    check = false;
  } else if (accountData.some((e) => e.email === inputEmail)) {
    inputError.innerHTML += "Email bị đã tồn tại <br />";
  }

  // Kiểm tra password
  if (inputPassword === "") {
    inputError.innerHTML += "Password không được bỏ trống <br />";
    check = false;
  } else if (inputPassword.length < 8) {
    inputError.innerHTML += "Mật khẩu phải có ít nhất 8 ký tự <br />";
    check = false;
  } else if (inputPassword !== inputConfirmPassword) {
    inputError.innerHTML += "Mật khẩu xác nhận không trùng khớp";
    check = false;
  }

  if (check) {
    hideNotification(error);
    let pass = document.querySelector(".pass");
    showNotification(pass);

    accountData.push({
      id:
        accountData.length > 0 ? accountData[accountData.length - 1].id + 1 : 1,
      email: inputEmail,
      username: inputUsername,
      password: inputPassword,
    });
    localStorage.setItem("accountData", JSON.stringify(accountData));

    favoriteRecipeData.push({
      accountId: accountData[accountData.length - 1].id,
      idRecipeFavorite: [],
    });
    localStorage.setItem(
      "favoriteRecipeData",
      JSON.stringify(favoriteRecipeData)
    );
    setTimeout(function () {
      window.location.href = "signIn.html";
    }, 2000);
  } else {
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputUsername").value = "";
    document.getElementById("inputPassword").value = "";
    document.getElementById("inputConfirmPassword").value = "";
    error.style.display = "flex";
    showNotification(error);

    let btnClose = document.querySelector(".error .btn-close");
    btnClose.onclick = function () {
      hideNotification(error);
    };
  }
});
