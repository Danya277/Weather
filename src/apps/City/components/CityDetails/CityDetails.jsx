import { useContext } from "react"
import styles from "./CityDetails.module.css"
import { citiesContext } from "../../../../contexts/CitiesContext"
import { useNavigate } from "react-router-dom"

const CityDetails = () => {
    const {city} = useContext(citiesContext)
    const navigate = useNavigate()
    return (
        <div className="styles.container">
            <button variant="text" onClick={() => navigate("/")}> {"< Back"}</button>
            <h2>{city.title}gff</h2>
            <div className="styles.block">
                <div className="styles.image">
                    <img src={city.img} alt="" />
                </div>
                <div className="styles.body">
                    <p>{city.body}</p>
                </div>
            </div>
            
        </div>
    )
}

export default CityDetails