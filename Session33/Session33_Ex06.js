const weatherData = {
  "hà nội": {
    temperature: 25,
    humidity: 70,
    windSpeed: 5,
    description: "Có mây",
    icon: "☁️",
  },
  "hồ chí minh": {
    temperature: 32,
    humidity: 75,
    windSpeed: 7,
    description: "Nắng",
    icon: "☀️",
  },
  "đà nẵng": {
    temperature: 28,
    humidity: 82,
    windSpeed: 12,
    description: "Mưa rào",
    icon: "🌧️",
  },
};

let searchButton = document.getElementById("search");
let searchInput = document.getElementById("searchLocation");
let locationContainer = document.getElementById("location");

searchButton.addEventListener("click", function () {
  locationContainer.style.display = "block";
  let inputSearch = searchInput.value.toLowerCase().trim();
  let foundKey = null;

  for (let city in weatherData) {
    if (city.includes(inputSearch)) {
      foundKey = city;
      break;
    }
  }

  if (foundKey) {
    let data = weatherData[foundKey];

    locationContainer.innerHTML = `
        <div class="title">${foundKey.toUpperCase()}</div>
        <div class="table">
          <div id="left">
            <div id="icon">${data.icon}</div>
            <div id="nhietDo">${data.temperature}°C</div>
          </div>
          <div id="right">
            <div id="description">${data.description}</div>
            <div id="humidity">Độ ẩm: ${data.humidity}%</div>
            <div id="windSpeed">Tốc độ gió: ${data.windSpeed} km/h</div>
          </div>
        </div>
      `;
  } else {
    locationContainer.innerHTML = `
        <div class="title text-danger">Không tìm thấy!</div>
        <div class="table">
          <div id="left">
            <div id="icon">❓</div>
            <div id="nhietDo">--°C</div>
          </div>
          <div id="right">
            <div id="description">Không có dữ liệu</div>
            <div id="humidity">Độ ẩm: --%</div>
            <div id="windSpeed">Tốc độ gió: -- km/h</div>
          </div>
        </div>
      `;
  }
});
