function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  // Dummy data to simulate weather API
  const data = {
    name: city,
    sys: { country: "IN" },
    main: { temp: 29.5 },
    weather: [{ description: "clear sky", icon: "01d" }],
    wind: { speed: 3.2 }
  };

  document.getElementById("weatherCard").classList.remove("hidden");
  document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").textContent = `🌡️ Temperature: ${data.main.temp}°C`;
  document.getElementById("description").textContent = `🌤️ Condition: ${data.weather[0].description}`;
  document.getElementById("wind").textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
