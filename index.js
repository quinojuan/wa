const apiKey = "";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

const checkWeather = async () => {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
};

checkWeather();
