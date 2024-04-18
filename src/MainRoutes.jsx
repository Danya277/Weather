import { Route, Routes } from "react-router-dom";
import HomeView from "./apps/Home/views/HomeView";
import { HOME_ROUTES } from "./apps/Home/urls";
import { ABOUT_ROUTES } from "./apps/About/urls";
import { CITY_ROUTES } from "./apps/City/urls";

const MainRoutes = () => {
  return (
    <Routes>
      {[...HOME_ROUTES, ...ABOUT_ROUTES, ...CITY_ROUTES].map((routeObject) => (
        <Route path={routeObject.path} element={routeObject.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
