import { useContext, useState } from "react";
import { CityItem } from "../../Home/components/CityItem";
import { citiesContext } from "../../../contexts/CitiesContext";
import styles from "../../Home/components/Weather/Weather.module.css"
import { useEffect } from "react";



const AboutView = () => {
  const [value, setValue] = useState('')
  const [cities, setCitiesData] = useState([]);
  // const { cities } = useContext(citiesContext);
  
  const filteredCities = cities.filter(city => {
    return city.title.toLowerCase().includes(value.toLowerCase())
  })

  let key = "BqYhFtCWE+JLYwDZOKNfOg==yuDhrkcGwDWbdAu2"
  let url = `https://api.api-ninjas.com/v1/city?name=Bishkek`
  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'X-Api-Key': key},
          contentType: 'application/json'
        });
        const data = await response.json();
        setCitiesData(data);
      } catch (error) {
        console.error('Error fetching cities data:', error);
      }
    };

    fetchCitiesData();
  }, []);


  return (
    <div className={styles.container}>
      <input 
      className={styles.searchBar}
       type="text" 
       placeholder="Поиск..."
       onChange={(e) => setValue(e.target.value)}
       />
      <ul className={styles.citylist}>
      {filteredCities.map((city) => {
        return <CityItem city={city} />;
      })}
    </ul>
    </div>
    
  );
};


export default AboutView;
