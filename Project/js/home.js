document.addEventListener("DOMContentLoaded", function () {
  const btnCloseSidebar = document.querySelector(".btnCloseSidebar");
  const sideBar = document.querySelector(".sideBar");
  const headerContent = document.querySelector(".header-content");
  const textElements = document.querySelectorAll(".textPage, .textSignOut");
  const logoFull = document.querySelector(".logo-full");
  const logoIcon = document.querySelector(".logo-icon");

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
    } else {
      // Mở rộng sidebar
      sideBar.classList.remove("collapsed");
      headerContent.classList.remove("expanded");

      // Hiện text
      textElements.forEach((el) => {
        el.style.display = "block";
      });
    }
  });
});

//Đăng xuất tài khoản
document
  .querySelector(".sideBar .signOut")
  .addEventListener("click", function () {
    localStorage.removeItem("loginAccountData");
    window.location.href = "signIn.html";
  });

//render lựa chọn category
document.addEventListener("DOMContentLoaded", function () {
  let categoriesRecipeData = JSON.parse(
    localStorage.getItem("categoriesRecipeData")
  );
  let searchCategory = document.getElementById("searchCategory");
  searchCategory.innerHTML = "";
  searchCategory.innerHTML = `<option value="category" selected>Category</option>`;
  categoriesRecipeData.forEach((e) => {
    searchCategory.innerHTML += `
    <option value="${e.name}">${e.name}</option>
    `;
  });
});

// lấy dữ liệu
let favoriteRecipeData =
  JSON.parse(localStorage.getItem("favoriteRecipeData")) || [];
let recipeData = JSON.parse(localStorage.getItem("recipesData")) || [];
let loginAccountData = JSON.parse(localStorage.getItem("loginAccountData"));
let idAccountLogin = loginAccountData.id;
let currentPage = 1;

// Hàm in
function renderRecipes(recipesToRender) {
  // Lấy container hiển thị danh sách món ăn
  const recipesList = document.querySelector(".contentContainer .recipesList");
  const paginationContainer = document.getElementById("pagination");
  const recipesPerPage = 6;
  const totalPages = Math.ceil(recipesToRender.length / recipesPerPage);

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  // phạm vi công thức hiển thị
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = Math.min(
    startIndex + recipesPerPage,
    recipesToRender.length
  );
  const currentPageRecipes = recipesToRender.slice(startIndex, endIndex);

  recipesList.innerHTML = "";
  // Duyệt qua từng món ăn và tạo HTML
  currentPageRecipes.forEach((recipe) => {
    // Tạo chuỗi các category
    const categoryName = recipe.category
      .map((cat) => `<span>${cat.name}</span>`)
      .join(", ");

    recipesList.innerHTML += `
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

  // render phân trang
  paginationContainer.innerHTML = "";
  paginationContainer.innerHTML += `<div class="backPage"><img src="../assets/home/backPage.png" alt="" height="13px" /></div>`;

  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.innerHTML += `
        <div class="page-item ${
          i === currentPage ? "active" : ""
        }" data-page="${i}">
          ${i}
        </div>
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

// Hàm in ra tất cả món ăn
function renderFavoriteRecipe() {
  // Lọc ra favorite của tài khoản đang đăng nhập
  const favoriteRecipe = favoriteRecipeData.find(
    (e) => e.accountId === idAccountLogin
  );
  if (!favoriteRecipe || !favoriteRecipe.idRecipeFavorite) {
    return;
  }
  // Lấy danh sách các món ăn từ id trong favorite
  const recipesToRender = favoriteRecipe.idRecipeFavorite.map((recipeId) => {
    return recipeData.find((recipe) => recipe.id === recipeId);
  });

  // Gọi hàm render chung
  renderRecipes(recipesToRender);
}

renderFavoriteRecipe();

//Hàm tìm kiếm công thức
document.getElementById("searchRecipe").addEventListener("input", function () {
  currentPage = 1;
  // Lọc favorite của tài khoản đăng nhập
  const favoriteRecipe = favoriteRecipeData.find(
    (e) => e.accountId === idAccountLogin
  );

  if (!favoriteRecipe || !favoriteRecipe.idRecipeFavorite) {
    return;
  }

  // Lấy từ khóa tìm kiếm
  const inputSearchRecipe = document
    .getElementById("searchRecipe")
    .value.trim()
    .toLowerCase();
  const inputSearchNutrient = document.getElementById("searchNutrient").value;
  const inputSearchCategory = document.getElementById("searchCategory").value;
  // Lấy danh sách món ăn yêu thích từ dữ liệu gốc
  const recipesFavorite = favoriteRecipe.idRecipeFavorite.map((recipeId) => {
    return recipeData.find((recipe) => recipe.id === recipeId);
  });
  // Lọc theo từ khóa tìm kiếm trong tên món ăn hoặc danh mục
  const filteredRecipes = recipesFavorite.filter((recipe) => {
    const matchesName = recipe.name.toLowerCase().includes(inputSearchRecipe);

    // Kiểm tra nếu danh mục được chọn
    const matchesCategory =
      inputSearchCategory === "category" ||
      recipe.category.some((cat) => cat.name === inputSearchCategory);

    return matchesName && matchesCategory;
  });
  // Render ra danh sách món ăn đã lọc
  renderRecipes(filteredRecipes);
});

//Lọc thể loại món ăn
document
  .getElementById("searchCategory")
  .addEventListener("change", function () {
    currentPage = 1;
    const favoriteRecipe = favoriteRecipeData.find(
      (e) => e.accountId === idAccountLogin
    );
    if (!favoriteRecipe || !favoriteRecipe.idRecipeFavorite) {
      return;
    }
    const recipesFavorite = favoriteRecipe.idRecipeFavorite.map((recipeId) => {
      return recipeData.find((recipe) => recipe.id === recipeId);
    });

    const searchCategory = this.value;
    if (searchCategory === "category") {
      renderFavoriteRecipe();
      return;
    }
    const filteredRecipes = recipesFavorite.filter((recipe) => {
      return recipe.category.some((cat) => cat.name === searchCategory);
    });
    renderRecipes(filteredRecipes);
  });

// Tính năng phân trang
// let recipesData = [
//   {
//     id: 1,
//     coverSrc: "",
//     name: "Turmeric Roasted Cauliflower Salad (lowfodmap)",
//     description:
//       "Our roasted cauliflower salad with turmeric is low in calories and packed with punchy flavor.",
//     author: "Joana Jardim",
//     totalTime: "00:40",
//     preparationTime: "00:40",
//     finalWeight: "978.8 grams",
//     portions: 4,
//     likes: 134,
//     ingredients: [1, 2, 3], // 3 ingredients
//     cookingMethods:
//       "STEP 1 Heat the oven to 200C/fan 180C/gas 6. Put the cauliflower in an ovenproof dish or tin.",
//     category: [
//       { id: 1, name: "vegetarian" },
//       { id: 2, name: "appetizer" },
//     ],
//   },
//   {
//     id: 2,
//     coverSrc: "",
//     name: "Grilled Chicken with Lemon and Herbs",
//     description:
//       "Juicy grilled chicken breasts marinated in a lemon and herb sauce.",
//     author: "Carlos Mendes",
//     totalTime: "00:30",
//     preparationTime: "00:15",
//     finalWeight: "850 grams",
//     portions: 3,
//     likes: 198,
//     ingredients: [4, 5, 6, 1], // 4 ingredients
//     cookingMethods:
//       "STEP 1 Mix lemon juice, olive oil, and herbs. Marinate chicken for 15 minutes then grill until cooked.",
//     category: [
//       { id: 3, name: "grilled" },
//       { id: 4, name: "main course" },
//     ],
//   },
//   {
//     id: 3,
//     coverSrc: "",
//     name: "Creamy Pumpkin Soup",
//     description:
//       "A comforting and creamy soup made with roasted pumpkin and a touch of cream.",
//     author: "Lena Hart",
//     totalTime: "00:50",
//     preparationTime: "00:20",
//     finalWeight: "1100 grams",
//     portions: 4,
//     likes: 165,
//     ingredients: [2, 3, 7], // 3 ingredients
//     cookingMethods:
//       "STEP 1 Roast the pumpkin at 180C until soft. Blend with cream and season to taste.",
//     category: [
//       { id: 5, name: "soup" },
//       { id: 6, name: "vegetarian" },
//     ],
//   },
//   {
//     id: 4,
//     coverSrc: "",
//     name: "Spaghetti Aglio e Olio",
//     description: "Simple and classic Italian pasta with garlic and olive oil.",
//     author: "Marco Rossi",
//     totalTime: "00:20",
//     preparationTime: "00:10",
//     finalWeight: "600 grams",
//     portions: 2,
//     likes: 243,
//     ingredients: [1, 4, 5], // 3 ingredients
//     cookingMethods:
//       "STEP 1 Cook spaghetti. Sauté garlic in olive oil and toss with pasta.",
//     category: [
//       { id: 7, name: "pasta" },
//       { id: 1, name: "vegetarian" },
//     ],
//   },
//   {
//     id: 5,
//     coverSrc: "",
//     name: "Chickpea & Spinach Stew",
//     description:
//       "A hearty and healthy stew made with chickpeas, spinach, and warm spices.",
//     author: "Ayesha Noor",
//     totalTime: "00:45",
//     preparationTime: "00:20",
//     finalWeight: "900 grams",
//     portions: 3,
//     likes: 120,
//     ingredients: [6, 7, 2, 3], // 4 ingredients
//     cookingMethods:
//       "STEP 1 Sauté onions and garlic, add chickpeas and spinach, and simmer until flavors blend.",
//     category: [
//       { id: 8, name: "stew" },
//       { id: 1, name: "vegetarian" },
//     ],
//   },
//   {
//     id: 6,
//     coverSrc: "",
//     name: "Tofu Stir-Fry with Veggies",
//     description:
//       "Colorful stir-fried vegetables tossed with crispy tofu in a savory sauce.",
//     author: "Minh Tran",
//     totalTime: "00:25",
//     preparationTime: "00:15",
//     finalWeight: "750 grams",
//     portions: 2,
//     likes: 177,
//     ingredients: [4, 1, 5], // 3 ingredients
//     cookingMethods:
//       "STEP 1 Fry tofu until golden. Add vegetables and stir-fry with sauce for 5 minutes.",
//     category: [
//       { id: 9, name: "stir-fry" },
//       { id: 1, name: "vegetarian" },
//     ],
//   },
//   {
//     id: 7,
//     coverSrc: "",
//     name: "Baked Salmon with Dill",
//     description: "Tender salmon fillet baked with lemon slices and fresh dill.",
//     author: "Elena Petrova",
//     totalTime: "00:35",
//     preparationTime: "00:10",
//     finalWeight: "500 grams",
//     portions: 2,
//     likes: 210,
//     ingredients: [6, 2, 3], // 3 ingredients
//     cookingMethods:
//       "STEP 1 Preheat oven. Place salmon in foil with lemon and dill. Bake for 20 minutes.",
//     category: [
//       { id: 10, name: "seafood" },
//       { id: 4, name: "main course" },
//     ],
//   },
//   {
//     id: 8,
//     coverSrc: "",
//     name: "Avocado Toast with Poached Egg",
//     description:
//       "A nourishing breakfast of wholegrain toast topped with smashed avocado and a poached egg.",
//     author: "Sarah Kim",
//     totalTime: "00:15",
//     preparationTime: "00:10",
//     finalWeight: "300 grams",
//     portions: 1,
//     likes: 156,
//     ingredients: [7, 1, 4], // 3 ingredients
//     cookingMethods:
//       "STEP 1 Toast bread, mash avocado, and top with a poached egg.",
//     category: [
//       { id: 11, name: "breakfast" },
//       { id: 1, name: "vegetarian" },
//     ],
//   },
//   {
//     id: 9,
//     coverSrc: "",
//     name: "Stuffed Bell Peppers",
//     description:
//       "Bell peppers filled with a tasty mix of rice, beans, and herbs.",
//     author: "James Lee",
//     totalTime: "01:00",
//     preparationTime: "00:25",
//     finalWeight: "1000 grams",
//     portions: 4,
//     likes: 188,
//     ingredients: [5, 6, 2, 3], // 4 ingredients
//     cookingMethods:
//       "STEP 1 Hollow bell peppers, fill with mix, and bake at 180C for 30-35 minutes.",
//     category: [
//       { id: 12, name: "baked" },
//       { id: 1, name: "vegetarian" },
//     ],
//   },
//   {
//     id: 10,
//     coverSrc: "",
//     name: "Quinoa Salad with Feta and Olives",
//     description:
//       "A Mediterranean-inspired quinoa salad with feta cheese and olives.",
//     author: "Maria Papadopoulos",
//     totalTime: "00:25",
//     preparationTime: "00:20",
//     finalWeight: "680 grams",
//     portions: 3,
//     likes: 142,
//     ingredients: [4, 7, 1], // 3 ingredients
//     cookingMethods:
//       "STEP 1 Cook quinoa, let cool, and mix with feta, olives, and dressing.",
//     category: [
//       { id: 13, name: "salad" },
//       { id: 1, name: "vegetarian" },
//     ],
//   },
// ];

// localStorage.setItem("recipesData", JSON.stringify(recipesData));

// const categoriesRecipeData = [
//   {
//     id: 1,
//     name: "vegetarian",
//     description:
//       "Dishes that do not include meat, fish, or poultry, suitable for individuals who follow a vegetarian diet. These meals often incorporate vegetables, fruits, grains, legumes, nuts, and dairy products.",
//   },
//   {
//     id: 2,
//     name: "appetizer",
//     description:
//       "Small dishes served before the main course to stimulate the appetite.",
//   },
//   {
//     id: 3,
//     name: "vegan",
//     description:
//       "Plant-based recipes with no animal products, including dairy and eggs.",
//   },
//   {
//     id: 4,
//     name: "main course",
//     description: "The main dish in a meal, often more substantial and filling.",
//   },
//   {
//     id: 5,
//     name: "dessert",
//     description: "Sweet dishes typically served at the end of a meal.",
//   },
//   {
//     id: 6,
//     name: "low-carb",
//     description:
//       "Recipes with reduced carbohydrate content, often for weight or sugar control.",
//   },
//   {
//     id: 7,
//     name: "gluten-free",
//     description:
//       "Meals made without gluten, suitable for those with gluten intolerance.",
//   },
//   {
//     id: 8,
//     name: "breakfast",
//     description: "Recipes designed for the first meal of the day.",
//   },
//   {
//     id: 9,
//     name: "salad",
//     description:
//       "Cold or warm dishes primarily composed of vegetables, fruits, and other fresh ingredients.",
//   },
//   {
//     id: 10,
//     name: "soup",
//     description:
//       "Liquid-based dishes, either hot or cold, made with a variety of ingredients.",
//   },
// ];
// localStorage.setItem("categoriesRecipeData", JSON.stringify(categoriesRecipeData));
