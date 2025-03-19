let button = document.getElementById("button");
let body = document.body;

button.addEventListener("click", function () {
  body.classList.toggle("darkMode");
  body.classList.toggle("lightMode");
});
