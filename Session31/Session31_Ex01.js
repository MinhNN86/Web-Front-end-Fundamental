let text = document.getElementById("text");
let showText = document.getElementById("showText");
let hideText = document.getElementById("hideText");
showText.addEventListener("click", function () {
  text.classList.remove("hide");
  text.classList.add("show");
});
hideText.addEventListener("click", function () {
  text.classList.remove("show");
  text.classList.add("hide");
});
