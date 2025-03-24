let button = document.getElementById("button");
let password = document.getElementById("password");
let show = false;
button.addEventListener("click", function () {
  if (!show) {
    password.setAttribute("type", "text");
    show = true;
  } else {
    password.setAttribute("type", "password");
    show = false;
  }
});
