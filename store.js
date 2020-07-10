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
    let newState;
    switch (action.type) {
      case "SAVE":
        newState = {
          ...state,
          [action.payload.key]: action.payload.value,
        };
        if (action.payload.persist) persist(newState);
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

async function persist(state) {
  await fetch("/api/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...state }),
  });
}

StateProvider.propTypes = {
  children: PropTypes.any,
};

export { store, StateProvider };
