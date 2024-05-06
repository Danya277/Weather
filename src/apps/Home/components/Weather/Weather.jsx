import { useState } from "react";
import styles from "./Weather.module.css"
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const API_KEY = '89f5012635a78a269578436571aea00b';
  const location = useLocation();
  const CITY = location.state ? location.state.cityName : "Bishkek";

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
        setCurrentWeather(response.data);
      } catch (error) {
        console.log('Error fetching current weather:', error);
      }
    };

    const fetchWeatherForecast = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`);
        setForecastData(response.data);
      } catch (error) {
        console.log('Error fetching weather forecast:', error);
      }
    };

    fetchCurrentWeather();
    fetchWeatherForecast();
  }, []);

  return (
    <div>
      {currentWeather && (
        <div className={styles.main_card}>
          <h2 className={styles.name}>Current Weather in {CITY}</h2>
          <p className={styles.temp}>{currentWeather.main.temp}°C</p>
          {currentWeather.weather[0].icon && (
            <img className={styles.current_icon} src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`} alt="Weather Icon" />
          )}
          <p className={styles.condition}>Condition: {currentWeather.weather[0].description}</p>
          <p className={styles.wind}>Wind Speed: {currentWeather.wind.speed} m/s</p>
          <p className={styles.humidity}>Humidity: {currentWeather.main.humidity}%</p>
          <br /> <br /> <br />
        </div>
      )}
      <h2 className={styles.name}>Weather Forecast for {CITY}</h2> <br /> <br />
      {forecastData ? (
        <div>
          {forecastData.list.map((forecast, index) => (
            <div className={styles.main_card} key={index}>
              <h3 className={styles.date}>{forecast.dt_txt}</h3>
              <p className={styles.tempf}>{forecast.main.temp}°C</p>
              <p className={styles.conditionf}>Condition: {forecast.weather[0].description}</p>
              <p className={styles.humidityf}>Humidity: {forecast.main.humidity}%</p>
              {currentWeather.weather[0].icon && (
            <img className={styles.forecast_icon} src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="Weather Icon" />
          )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading forecast data...</p>
      )}
    </div>
  );
};

export default Weather;