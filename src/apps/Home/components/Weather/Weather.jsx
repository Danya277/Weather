import { useContext, useState } from "react";
import { citiesContext } from "../../../../contexts/CitiesContext";
import styles from "./Weather.module.css"
import { useEffect } from "react";
import axios from "axios";

const CitiesList = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const API_KEY = '89f5012635a78a269578436571aea00b';
  const CITY = 'Bishkek'; // Или любой другой город по вашему выбору

  useEffect(() => {
    // Функция для получения текущей погоды
    const fetchCurrentWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
        setCurrentWeather(response.data);
      } catch (error) {
        console.error('Error fetching current weather:', error);
      }
    };

    // Функция для получения прогноза на несколько дней
    const fetchWeatherForecast = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`);
        setForecastData(response.data);
      } catch (error) {
        console.error('Error fetching weather forecast:', error);
      }
    };

    // Выполнение обеих функций при загрузке компонента
    fetchCurrentWeather();
    fetchWeatherForecast();
  }, []);

  return (
    <div>
      {currentWeather && (
        <div>
          <h2>Current Weather in {CITY}</h2>
          <p>Temperature: {currentWeather.main.temp}°C</p>
          <p>Condition: {currentWeather.weather[0].description}</p>
          <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
        </div>
      )}
      <h2>Weather Forecast for {CITY}</h2>
      {forecastData ? (
        <div>
          {forecastData.list.map((forecast, index) => (
            <div key={index}>
              <h3>Date: {forecast.dt_txt}</h3>
              <p>Temperature: {forecast.main.temp}°C</p>
              <p>Condition: {forecast.weather[0].description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading forecast data...</p>
      )}
    </div>
  );
};
export default CitiesList;