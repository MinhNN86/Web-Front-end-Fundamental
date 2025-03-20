let inputEmail = document.getElementById("inputGmail");
let check = document.getElementById("check");
let emailHopLe = document.getElementById("emailHopLe");
let emailKhongHopLe = document.getElementById("emailKhongHopLe");
check.addEventListener("click", function () {
  let email = inputEmail.value;
  if (email === "") {
    alert("Email kiểm tra trống");
  } else if (
    email.includes("@") &&
    (email.includes(".vn") || email.includes(".com"))
  ) {
    emailKhongHopLe.style.display = "none";
    emailHopLe.style.display = "block";
  } else {
    emailKhongHopLe.style.display = "block";
    emailHopLe.style.display = "none";
  }
});
