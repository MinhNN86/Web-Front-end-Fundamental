let boxXanh = document.querySelector(".xanh");
let boxDo = document.querySelector(".do");
let boxTim = document.querySelector(".tim");
let body = document.body;

boxXanh.addEventListener("click", function () {
  body.classList.remove("do", "tim");
  body.classList.add("xanh");
});

boxDo.addEventListener("click", function () {
  body.classList.remove("xanh", "tim");
  body.classList.add("do");
});

boxTim.addEventListener("click", function () {
  body.classList.remove("xanh", "do");
  body.classList.add("tim");
});
