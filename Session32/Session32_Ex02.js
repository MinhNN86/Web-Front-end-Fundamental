let button = document.getElementById("button");
let soLanBam = 0;
let add = "";
let bam = document.getElementById("soLanBam");
button.addEventListener("click", function () {
  soLanBam++;
  add = "Số lần bấm: " + soLanBam;
  bam.innerHTML = add;
});
