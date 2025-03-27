let savedColor = localStorage.getItem("backgroundColorData");
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
}

let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let color = this.getAttribute("data-color");
    document.body.style.backgroundColor = color;
    localStorage.setItem("backgroundColorData", color);
  });
});
