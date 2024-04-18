import { createContext, useReducer, useState } from "react";
import axios from "axios";

export const citiesContext = createContext();

const INITIAL_STATE = {
  cities: [],
  city: {},
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CITIES": {
      return { ...state, cities: action.payload };
    }
    case "GET_CITY_BY_ID": {
      return { ...state, city: action.payload };
    }
    case "GET_CITY_BY_ID_ERROR": {
      return {...state, error: action.payload}
    }
    default: {
      return state;
    }
  }
};

const CitiesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const getCities = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/cities");
      dispatch({
        type: "GET_CITIES",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
    
  };

  const getCityById = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8000/cities?id=${id}`);
      dispatch({
        type: "GET_CITY_BY_ID",
        payload: data[0],
      });
    } catch (e) {
      dispatch({
        type: "GET_POST_BY_ID_ERROR",
        payload: "Такого города не существует :/"
      })
    }
  };

  

  return (
    <citiesContext.Provider
      value={{
        cities: state.cities,
        city: state.city,
        error: state.error,
        getCities: getCities,
        getCityById: getCityById,
      }}
    >
      {props.children}
    </citiesContext.Provider>
  );
};

export default CitiesContextProvider;
