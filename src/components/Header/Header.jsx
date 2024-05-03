import { Link } from "react-router-dom";
import AuthButtons from "../AuthButtons/AuthButtons"
import styles from "./Header.module.css"
import { useContext } from "react";
import { citiesContext } from "../../contexts/CitiesContext";
import { TextField } from "../TextField";

const Header = () => {
  return (
    
    <header className={styles.header}> 
      <div className={styles.container}>
        <div className={styles.logo}>Weather</div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Cities</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
