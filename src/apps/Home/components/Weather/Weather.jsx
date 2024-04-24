import { useContext, useState } from "react";
import { CityItem } from "../CityItem";
import { citiesContext } from "../../../../contexts/CitiesContext";
import styles from "./Weather.module.css"
import { TextField } from "../../../../components";
import { useEffect } from "react";

const CitiesList = () => {
  const [weatherData, setWeatherData] = useState(null);
    const {city} = useContext(citiesContext)
    let key = "e69921f07aeb49f2bdc172803242004"
    let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Almaty&aqi=no`
    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
  
      fetchWeatherData();
    }, []);
  
    return (
      <div>
        <h2>Weather Information</h2>
        {weatherData ? (
          <div>
            <p>Location: {weatherData.location.name}</p>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
  );
};

export default CitiesList;
