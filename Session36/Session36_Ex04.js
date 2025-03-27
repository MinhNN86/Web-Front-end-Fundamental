let darkModeData =
  JSON.parse(localStorage.getItem("darkModeData")) || "lightMode";
if (darkModeData === "darkMode") {
  document.body.classList.add("dark-mode");
}

let buttonMode = document.getElementById("buttonMode");
buttonMode.addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    darkModeData = "lightMode";
  } else {
    document.body.classList.add("dark-mode");
    darkModeData = "darkMode";
  }

  localStorage.setItem("darkModeData", JSON.stringify(darkModeData));
});
