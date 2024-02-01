function getWeather(lat, lon) {
    const apiKey = 'a5d5ca5a1cb1f7f1219396443bec0bf1';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych:', error);
        alert('Wystąpił błąd podczas pobierania danych pogodowych.');
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
  
    const weatherHTML = `
      <h2>${cityName}</h2>
      <p class="weather-text">Temperature: ${temperature}°C</p>
      <p class="weather-text">Sky description: ${description}</p>
    `;
  
    weatherInfo.innerHTML = weatherHTML;
  }