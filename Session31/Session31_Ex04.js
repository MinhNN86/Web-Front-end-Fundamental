let openModal = document.getElementById("openModal");
let closeModal = document.getElementById("closeModal");
let modalOverlay = document.getElementById("modalOverlay");
openModal.addEventListener("click", function () {
  modalOverlay.style.display = "flex";
});
closeModal.addEventListener("click", function () {
  modalOverlay.style.display = "none";
});
