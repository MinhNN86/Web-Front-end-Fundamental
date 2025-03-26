let productsData = JSON.parse(localStorage.getItem("productsData")) || [];
let productsList = document.getElementById("productsList");
function displayProducts() {
  productsList.innerHTML = "";
  let add = "";
  productsData.forEach((e) => {
    add += `
        <div class="col-md-2 col-sm-3 col-4">
          <div class="product-card">
            <img
              src="${e.image}"
              alt="${e.name}"
            />
            <h6 class="mt-1">${e.name}</h6>
            <p>${e.price.toLocaleString("vi-VN")}</p>
            <p>${e.description}</p>
            <button class="btn-buy">Buy</button>
          </div>
        </div>
        `;
  });
  productsList.innerHTML = add;
  add = "";
}
displayProducts();

let searchProduct = document.getElementById("search");
searchProduct.addEventListener("click", function () {
  let inputSearch = document.getElementById("inputSearch");
  if (inputSearch.value === "") {
    alert("Phần tìm kiếm bỏ trống");
    displayProducts();
  } else {
    let searchResult = productsData.filter((e) =>
      e.name.toLowerCase().includes(inputSearch.value.toLowerCase())
    );
    if (searchResult.length === 0) {
      alert("Không tìm thấy phần tử");
    }
    let add = "";
    searchResult.forEach((e) => {
      add += `
        <div class="col-md-2 col-sm-3 col-4">
          <div class="product-card">
            <img
              src="${e.image}"
              alt="${e.name}"
            />
            <h6 class="mt-1">${e.name}</h6>
            <p>${e.price.toLocaleString("vi-VN")}</p>
            <p>${e.description}</p>
            <button class="btn-buy">Buy</button>
          </div>
        </div>
        `;
    });
    document.getElementById("productsList").innerHTML = add;
  }
});
