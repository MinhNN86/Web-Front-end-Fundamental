// Hiệu ứng sidebar
document.addEventListener("DOMContentLoaded", function () {
  const btnCloseSidebar = document.querySelector(".btnCloseSidebar");
  const sideBar = document.querySelector(".sideBar");
  const headerContent = document.querySelector(".header-content");
  const textElements = document.querySelectorAll(".textPage, .textSignOut");
  const logoFull = document.querySelector(".logoFull");
  const logoIcon = document.querySelector(".logoIcon");

  // Trạng thái sidebar (mở = true, đóng = false)
  let sidebarOpen = true;

  btnCloseSidebar.addEventListener("click", function () {
    sidebarOpen = !sidebarOpen;

    if (!sidebarOpen) {
      // Thu gọn sidebar
      sideBar.classList.add("collapsed");
      headerContent.classList.add("expanded");

      // Ẩn text
      textElements.forEach((el) => {
        el.style.display = "none";
      });

      // Hiện logo icon, ẩn logo đầy đủ
      logoFull.style.display = "none";
      logoIcon.style.display = "block";
    } else {
      // Mở rộng sidebar
      sideBar.classList.remove("collapsed");
      headerContent.classList.remove("expanded");

      // Hiện text
      textElements.forEach((el) => {
        el.style.display = "block";
      });

      // Hiện logo đầy đủ, ẩn logo icon
      logoFull.style.display = "block";
      logoIcon.style.display = "none";
    }
  });
});

// chuyển hướng sang trang addRecipe
document.getElementById("addRecipe").addEventListener("click", function () {
  window.location.href = "addRecipe.html";
});

// hàm render recipe
let currentPage = 1;
function renderRecipes(recipesToRender) {
  const recipeList = document.querySelector(".contentContainer .recipesList");
  const paginationContainer = document.getElementById("pagination");
  const recipesPerPage = 6;
  const totalPages = Math.ceil(recipesToRender.length / recipesPerPage);

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = Math.min(
    startIndex + recipesPerPage,
    recipesToRender.length
  );
  const currentPageRecipes = recipesToRender.slice(startIndex, endIndex);

  recipeList.innerHTML = "";
  currentPageRecipes.forEach((recipe) => {
    const categoryName = recipe.category
      .map((cat) => `<span>${cat.name}</span>`)
      .join(", ");

    recipeList.innerHTML += `
    <div class="recipeCard" data-id="${recipe.id}">
        <div class="recipeTag">
          <img src="../assets/home/communityRecipes.png" alt="" width="14px" height="14px" />
          <div class="textRecipeTag">Community Recipes</div>
        </div>
        <div class="recipeContent">
          <div class="recipeTitle">
            <div class="recipeName">${recipe.name}</div>
            <div class="recipeLike">
              <img src="../assets/home/favoriteRecipes.png" alt="" width="13px" />
              <div class="numOfLike">${recipe.likes}</div>
            </div>
          </div>
          <div class="recipeAuthor">${recipe.author}</div>
          <div class="recipeCategory">
            <img src="../assets/home/categoryIcon.png" alt="" width="12px" />
            <div class="categoryName">${categoryName}</div>
          </div>
          <div class="nutritionInfo">
            <div class="weight">
              <div>by</div>
              <div>100g</div>
            </div>
            <div class="energy recipeNutrition">
              <div>Energy</div>
              <div class="nutritionValue">143 kcal</div>
            </div>
            <div class="fat recipeNutrition">
              <div>Fat</div>
              <div class="nutritionValue">6 g</div>
            </div>
            <div class="carbohydrate recipeNutrition">
              <div>Carbohydrate</div>
              <div class="nutritionValue">18 g</div>
            </div>
            <div class="protein recipeNutrition">
              <div>Protein</div>
              <div class="nutritionValue">5 g</div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  //render phân trang
  paginationContainer.innerHTML = "";
  paginationContainer.innerHTML += `<div class="backPage"><img src="../assets/home/backPage.png" alt="" height="13px" /></div>`;
  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.innerHTML += `
    <div class="page-item${
      i === currentPage ? " active" : ""
    }" data-page="${i}">${i}</div>
    `;
  }
  paginationContainer.innerHTML += `<div class="nextPage"><img src="../assets/home/nextPage.png" alt="" height="13px" /></div>`;

  document
    .querySelector("#pagination .backPage")
    .addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        renderRecipes(recipesToRender);
      }
    });

  document
    .querySelector("#pagination .nextPage")
    .addEventListener("click", function () {
      if (currentPage < totalPages) {
        currentPage++;
        renderRecipes(recipesToRender);
      }
    });

  document.querySelectorAll(".page-item").forEach((item) => {
    item.addEventListener("click", function () {
      currentPage = parseInt(this.getAttribute("data-page"));
      renderRecipes(recipesToRender);
    });
  });

  document.querySelectorAll(".recipeCard").forEach((card) => {
    card.addEventListener("click", function () {
      const recipeId = card.getAttribute("data-id");
      localStorage.setItem("currentRecipeId", recipeId);
      window.location.href = "recipeDetail.html";
    });
  });
}

// hàm in tất cả recipe
function renderAllRecipes() {
  const recipesData = JSON.parse(localStorage.getItem("recipesData"));
  renderRecipes(recipesData);
}

renderAllRecipes();

// render tìm kiếm
//render lựa chọn category
document.addEventListener("DOMContentLoaded", function () {
  let categoriesRecipeData = JSON.parse(
    localStorage.getItem("categoriesRecipeData")
  );
  let searchCategory = document.getElementById("searchCategory");
  searchCategory.innerHTML = "";
  searchCategory.innerHTML = `<option value="" selected>Category</option>`;
  categoriesRecipeData.forEach((e) => {
    searchCategory.innerHTML += `
    <option value="${e.name}">${e.name}</option>
    `;
  });
});

// render lựa chọn nutrient
document.addEventListener("DOMContentLoaded", function () {
  const nutrients = ["Energy", "Fat", "Carbohydrate", "Protein"];
  let inputNutrient = document.getElementById("searchNutrient");
  inputNutrient.innerHTML = "";
  inputNutrient.innerHTML += `<option value="" selected>Sort by nutrient</option>`;
  nutrients.forEach((e) => {
    inputNutrient.innerHTML += `<option value="${e.toLowerCase()}">${e}</option>`;
  });
});

// hàm tìm kiếm
const recipesData = JSON.parse(localStorage.getItem("recipesData"));
let filteredRecipes = recipesData;
function searchNameCategory() {
  currentPage = 1;
  const searchRecipe = document
    .getElementById("searchRecipe")
    .value.trim()
    .toLowerCase();
  const searchCategory = document.getElementById("searchCategory").value;

  // lọc dữ liệu
  filteredRecipes = recipesData.filter((recipe) => {
    const matchesName = recipe.name.toLowerCase().includes(searchRecipe);
    const matchesCategory =
      searchCategory === "" ||
      recipe.category.some((cat) => cat.name === searchCategory);

    return matchesName && matchesCategory;
  });

  renderRecipes(filteredRecipes);
}

document
  .getElementById("searchRecipe")
  .addEventListener("input", searchNameCategory);
document
  .getElementById("searchCategory")
  .addEventListener("change", searchNameCategory);
