//const axios = require('axios');

const apiKey = 'a2f8a57002a6495572e0169f9713f95c'; // Replace with your API key
const city = 'Manchester'; // Replace with the city of your choice

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

async function getWeather() {
    try {
      const response = await fetch(apiUrl);
  
      // Log the response status
      console.log('Response Status:', response.status);
  
      // Check if the response status is OK (200)
      if (response.ok) {
        const weatherData = await response.json();
        console.log('Weather Data:', weatherData);
  
        // Update the HTML content
        const weatherInfoDiv = document.getElementById('weather-info');
        weatherInfoDiv.innerHTML = `
          <h2>Weather in ${city}:</h2>
          <p>Temperature: ${weatherData.main.temp}°C</p>
          <p>Description: ${weatherData.weather[0].description}</p>
        `;
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  }
  
  getWeather();
  
