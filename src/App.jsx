import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Layout from "./Layout";
import "./reset.css";
import CitiesContextProvider from "./contexts/CitiesContext";
import Modal from "./components/Modal/Modal";
import AuthContextProvider from "./contexts/AuthContext";
import SearchContextProvider from "./contexts/SearchContext";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
        <CitiesContextProvider>
            <Layout />
            <Modal/>
        </CitiesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
