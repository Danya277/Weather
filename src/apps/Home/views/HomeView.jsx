import { useContext, useEffect } from "react";
import { Weather } from "../components/Weather";
import { citiesContext } from "../../../contexts/CitiesContext";
import styles from "./HomeView.module.css"

const HomeView = () => {
  const { getCities } = useContext(citiesContext);
  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className={styles.container}>
      <Weather />
    </div>
  );
};

export default HomeView;
