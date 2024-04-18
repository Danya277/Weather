import { useContext, useEffect } from "react";
import { citiesContext } from "../../../contexts/CitiesContext";
import { useParams } from "react-router-dom";
import { CityDetails } from "../components/CityDetails"

const CityView = () => {
  const { getCityById, error } = useContext(citiesContext);
  const { id } = useParams();


  useEffect(() => {
    getCityById(id);
  }, []);

  return <div>
    <CityDetails />
  </div>;
};

export default CityView;
