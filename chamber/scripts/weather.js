const apiKey = "6a80c1491ad62534e02c13b4eac8fcfc"; 
const city = "Domselaar"; 
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

// Fetch weather data
async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();

    // Extract current weather
    const currentTemp = data.list[0].main.temp.toFixed(1); // Current temp in °C
    const currentDescription = data.list[0].weather[0].description;

    // Extract 3-day forecast (data every 3 hours, 8 entries per day)
    const forecast = data.list.filter((_, index) => index % 8 === 0).slice(1, 4);

    // Update the DOM with weather data
    document.querySelector("#current-temp").textContent = `${currentTemp}°C`;
    document.querySelector("#current-desc").textContent = currentDescription;

    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = forecast
      .map(
        (day) =>
          `<div class="forecast-item">
            <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>High: ${day.main.temp_max.toFixed(1)}°C</p>
            <p>Low: ${day.main.temp_min.toFixed(1)}°C</p>
          </div>`
      )
      .join("");
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

fetchWeather();
