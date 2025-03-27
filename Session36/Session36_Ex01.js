let nameData = JSON.parse(localStorage.getItem("nameData")) || null;

document.getElementById("inputNameCard").style.display = "none";
document.getElementById("welcomeCard").style.display = "none";

if (!nameData) {
  inputName();
} else {
  showWelcomeCard(nameData);
}

function inputName() {
  let inputCard = document.getElementById("inputNameCard");
  let saveButton = document.getElementById("saveButton");

  inputCard.style.display = "block";

  saveButton.onclick = function () {
    let inputName = document.getElementById("inputName").value.trim();

    if (inputName === "") {
      alert("Họ tên không được để trống!");
    } else {
      localStorage.setItem("nameData", JSON.stringify(inputName));
      showWelcomeCard(inputName);
    }
  };
}

function showWelcomeCard(name) {
  let inputCard = document.getElementById("inputNameCard");
  let welcomeCard = document.getElementById("welcomeCard");

  inputCard.style.display = "none";
  welcomeCard.style.display = "block";

  document.getElementById("userName").innerText = name;

  document.getElementById("changeName").onclick = function () {
    localStorage.removeItem("nameData");
    welcomeCard.style.display = "none";
    inputName();
  };
}
