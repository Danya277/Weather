import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import styles from "./CityItem.module.css";

const CityItem = ({ city }) => {
  const navigate = useNavigate();
    const cityName = city.title

  return (
    <li className={styles.cityitem}>
      <h2>{city.title}</h2>
      <Button variant="contained" onClick={() => navigate("/", { state: { cityName } })}>Choose</Button>
    </li>
  );
};

export default CityItem;
