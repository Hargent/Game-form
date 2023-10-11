import { createContext, useContext } from "react";

import useAppContext from "../../hooks/use-app-context";

const ThanksContext = createContext();

const ThanksContextProvider = ({ children }) => {
  const { state } = useAppContext();

  const pageData = state.pageData.filter((page) => page.page === "thanks")?.[0]
    ?.data;
  const userData = state.userData;

  return (
    <ThanksContext.Provider value={{ pageData, userData }}>
      {children}
    </ThanksContext.Provider>
  );
};

const useThanksContext = () => {
  const context = useContext(ThanksContext);
  if (!context) {
    throw new Error("Thanks context used outside its provider");
  }
  return context;
};
export { useThanksContext, ThanksContextProvider };
