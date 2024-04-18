import { useContext, useState } from "react";
import { CityItem } from "../CityItem";
import { citiesContext } from "../../../../contexts/CitiesContext";
import styles from "./CitiesList.module.css"
import { TextField } from "../../../../components";

const CitiesList = () => {
  const [value, setValue] = useState('')

  const { cities } = useContext(citiesContext);
  
  const filteredCities = cities.filter(city => {
    return city.title.toLowerCase().includes(value.toLowerCase())
  })
  return (
    <div>
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

export default CitiesList;
