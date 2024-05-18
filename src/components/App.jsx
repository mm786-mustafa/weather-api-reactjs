import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input';
import Weather from './Weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [, setCity] = useState('London');
  const [showWeather, setShowWeather] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0c42ff3a38a1ff235b42553bb662aab&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
      setShowWeather(true); // Show the Weather component when data is fetched
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('City not found');
      setWeatherData(null);
      setShowWeather(false); // Hide the Weather component if there is an error
    }
  };

  const handleCityChange = (newCity) => {
    setCity(newCity);
    fetchWeatherData(newCity);
  };

  const handleBackClick = () => {
    setShowWeather(false); // Hide the Weather component and show Input component
  };

  return (
    <div>
      <div className={`wrapper ${showWeather ? 'active' : ''}`}>
        <header>
          {showWeather && <i className="fa-solid fa-arrow-left" onClick={handleBackClick}></i>}
          Weather App
        </header>
        {!showWeather && <Input onCityChange={handleCityChange} />}
        {error && <p className="info-txt error">{error}</p>}
        {showWeather && weatherData && (
          <Weather 
            icon={weatherData.weather[0].icon} 
            temp={weatherData.main.temp} 
            description={weatherData.weather[0].description}
            name={weatherData.name} 
            feels_like={weatherData.main.feels_like} 
            humidity={weatherData.main.humidity}
          />
        )}
      </div>
    </div>
  );
};

export default App;
