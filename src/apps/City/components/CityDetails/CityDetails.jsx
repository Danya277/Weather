import { useContext } from "react"
import styles from "./CityDetails.module.css"
import { citiesContext } from "../../../../contexts/CitiesContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const CityDetails = () => {
    const [weatherData, setWeatherData] = useState(null);
    const {city} = useContext(citiesContext)
    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e69921f07aeb49f2bdc172803242004&q=Bishkek&aqi=no`);
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
export default CityDetails