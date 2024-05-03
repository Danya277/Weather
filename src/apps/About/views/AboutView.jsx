import { useContext, useState } from "react";
import { CityItem } from "../../Home/components/CityItem";
import { citiesContext } from "../../../contexts/CitiesContext";
import styles from "./AboutView.module.css"
import { useEffect } from "react";



const AboutView = () => {
  const [value, setValue] = useState('')
  // const [cities, setCitiesData] = useState([]);
  const { cities } = useContext(citiesContext);
  
  const filteredCities = cities.filter(city => {
    return city.title.toLowerCase().includes(value.toLowerCase())
  })

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