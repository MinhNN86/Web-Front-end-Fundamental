let coChu = document.getElementsByClassName("text")[0];
let tangCoChu = document.getElementsByClassName("tangCoChu")[0];
let giamCoChu = document.getElementsByClassName("giamCoChu")[0];
coChu.style.fontSize = "16px";
tangCoChu.addEventListener("click", function () {
  let fontSize = parseInt(coChu.style.fontSize);
  coChu.style.fontSize = fontSize + 2 + "px";
});

giamCoChu.addEventListener("click", function () {
  let fontSize = parseInt(coChu.style.fontSize);
  coChu.style.fontSize = fontSize - 2 + "px";
});
