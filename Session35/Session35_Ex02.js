let bookmarkData = JSON.parse(localStorage.getItem("bookmarkData")) || [];
let bookmarkList = document.getElementById("bookmarkList");

function displaybookMarkData() {
  bookmarkList.innerHTML = "";
  let add = "";
  bookmarkData.forEach((e, i) => {
    add += `
      <div class="bookmark-card">
        <a href="${e.URL}" class="bookmark-link" target="_blank">${e.name}</a>
        <div class="deleteBookmark" data-id="${i}">X</div>
      </div>
    `;
  });
  bookmarkList.innerHTML = add;

  document.querySelectorAll(".deleteBookmark").forEach((button) => {
    button.addEventListener("click", function () {
      let index = this.getAttribute("data-id");
      bookmarkData.splice(index, 1);
      saveBookmark();
      displaybookMarkData();
    });
  });
}

function saveBookmark() {
  localStorage.setItem("bookmarkData", JSON.stringify(bookmarkData));
}

displaybookMarkData();

let saveNewBookmark = document.getElementById("saveNewBookMark");
saveNewBookmark.addEventListener("click", function () {
  let bookmarkName = document.getElementById("bookmarkName");
  let bookmarkURL = document.getElementById("bookmarkURL");

  if (bookmarkName.value.trim() === "" || bookmarkURL.value.trim() === "") {
    alert("Bookmark không được để trống!");
    return;
  }
  bookmarkData.push({
    name: bookmarkName.value,
    URL: bookmarkURL.value,
  });
  saveBookmark();
  displaybookMarkData();
  bookmarkName.value = "";
  bookmarkURL.value = "";
  // Tắt modal sau khi thêm bookmark
  let modal = bootstrap.Modal.getInstance(
    document.getElementById("addBookmarkModal")
  );
  modal.hide();
});
