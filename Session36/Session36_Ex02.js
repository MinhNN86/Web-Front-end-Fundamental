let food = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bun-Bo-Hue-from-Huong-Giang-2011.jpg/1200px-Bun-Bo-Hue-from-Huong-Giang-2011.jpg",
    name: "Bún bò Huế",
    luotThich: 0,
  },
  {
    image: "https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg",
    name: "Phở bò Hà Nội",
    luotThich: 0,
  },
  {
    image: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg",
    name: "Cơm tấm Sài Gòn",
    luotThich: 0,
  },
];

if (!localStorage.getItem("foodData")) {
  localStorage.setItem("foodData", JSON.stringify(food));
}

let foodData = JSON.parse(localStorage.getItem("foodData"));
let inputCard = document.getElementById("inputCard");

function displayFood() {
  inputCard.innerHTML = "";
  let add = "";
  foodData.forEach((e, i) => {
    add += `
          <div>
            <div class="card">
              <div style="display: flex; align-items: center; width: 40%">
                <img
                  src="${e.image}"
                  class="card-img-top"
                  alt="${e.name}"
                  style="border-radius: 5px"
                />
              </div>
              <div class="cardBody">
                <h5 class="card-title fw-bold">${e.name}</h5>
                <p class="like-count">
                  ❤️ <span id="like-count-${i}">${e.luotThich}</span> lượt thích
                </p>
                <button class="btn btn-success like-btn" data-id="${i}">
                  Thích +1
                </button>
              </div>
            </div>
          </div>`;
  });

  inputCard.innerHTML = add;
  document.querySelectorAll(".like-btn").forEach((button) => {
    button.addEventListener("click", function () {
      let index = this.getAttribute("data-id");
      foodData[index].luotThich += 1;
      localStorage.setItem("foodData", JSON.stringify(foodData));
      document.getElementById(`like-count-${index}`).textContent =
        foodData[index].luotThich;
    });
  });
}

displayFood();
