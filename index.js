const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${API_KEY}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
  }

  // menos efectivo
  // if (data.weather[0].main == "Clouds") weatherIcon.src = "images/clouds.png";
  // else if (data.weather[0].main == "Clear") weatherIcon.src = "images/clear.png";
  // else if (data.weather[0].main == "Rain") weatherIcon.src = "images/rain.png";
  // else if (data.weather[0].main == "Drizzle") weatherIcon.src = "images/drizzle.png";
  // else if (data.weather[0].main == "Mist") weatherIcon.src = "images/mist.png";
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
