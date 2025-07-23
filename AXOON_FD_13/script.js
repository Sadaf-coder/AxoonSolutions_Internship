
const apiKey = "49c530b11a70cdd14e5e5a51ad854aac";

function getWeather() {
  const city = document.getElementById("city").value;
  const weatherBox = document.getElementById("weather-box");
  const errorMessage = document.getElementById("error-message");

if (!city) {
  errorMessage.textContent = "Please enter a city name.";
  weatherBox.style.display = "none";
  return;
}

  errorMessage.textContent = ""; 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("City not found");
    }
    return response.json();
    })
    .then(data => {
      document.getElementById("city-name").textContent = data.name;
      document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById("condition").textContent = `Condition: ${data.weather[0].main}`;
      document.getElementById("weather-icon").src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weatherBox.style.display = "block";
    })
    .catch(error => {
      errorMessage.textContent = error.message;
      weatherBox.style.display = "none";
    });
}