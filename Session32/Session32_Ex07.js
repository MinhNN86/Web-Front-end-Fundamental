let container = document.getElementById("container");
let pics = [
  document.getElementById("pic1"),
  document.getElementById("pic2"),
  document.getElementById("pic3"),
];
let currentImage = null;
function pictureClick(pic) {
  pic.onclick = function () {
    let img = pic.children[0];
    if (currentImage === img) {
      resetImages();
    } else {
      resetImages();
      img.classList.add("fullScreen");
      currentImage = img;
      pics.forEach((p) => {
        if (p !== pic) {
          p.classList.add("hidden");
        }
      });
    }
  };
}
container.onclick = function (event) {
  if (event.target === container) {
    resetImages();
  }
};
function resetImages() {
  pics.forEach((p) => {
    let img = p.children[0];
    img.classList.remove("fullScreen");
    p.classList.remove("hidden");
  });
  currentImage = null;
}
pics.forEach(pictureClick);
