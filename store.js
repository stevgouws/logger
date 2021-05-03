import PropTypes from "prop-types";
import React, { createContext, useReducer } from "react";

const initialState = {
  neck: 0,
  thoracic: 0,
  leftHip: 0,
  fatigue: 0,
  stress: 0,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE":
        console.log("action.payload.key", action.payload.key);
        console.log("action.payload.value", action.payload.value);
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.any,
};

export { store, StateProvider };
