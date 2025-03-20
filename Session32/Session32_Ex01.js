function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(button) {
  button.parentElement.style.backgroundColor = getRandomColor();
}

let doiMauNen = document.getElementById("doiMauNen");
doiMauNen.addEventListener("click", function () {
  changeColor(doiMauNen);
});
