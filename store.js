import PropTypes from "prop-types";
import React, { createContext, useReducer } from "react";

const initialState = {
  neck: null,
  thoracic: null,
  leftHip: null,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE":
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
