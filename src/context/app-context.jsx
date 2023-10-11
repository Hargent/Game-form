// pass data based on either monthly or yearly duration
// and pass the duration too
// switch can change data in context

import { appData, pageData, userData } from "../data/data";
import { createContext, useReducer } from "react";

import reducer from "../reducer/reducer";

const AppContext = createContext(null);
const AppContextProvider = ({ children }) => {
  const initialState = { appData, pageData, userData };
  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = (value) => {
    // console.log(state);
    dispatch({ ...value });
  };
  console.log(state);

  return (
    <AppContext.Provider value={{ setState, state }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
