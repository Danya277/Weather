import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import styles from "./CityItem.module.css";

const CityItem = ({ city }) => {
  const slicedCityBody = city.body.slice(0, 50);
  const navigate = useNavigate()
  return (
    <li className={styles.cityitem}>
      <h2>{city.name}</h2>
      <p>{slicedCityBody}</p>
      <Button variant="contained" onClick={() => navigate(`/cities/${city.id}`)}>More</Button>
    </li>
  );
};

export default CityItem;
