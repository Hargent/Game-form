import { createContext, useContext } from "react";

import useAppContext from "../../hooks/use-app-context";

const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const { state } = useAppContext();

  const pageData = state.pageData.filter((page) => page.page === "")?.[0]?.data;

  return (
    <HomeContext.Provider value={{ pageData }}>{children}</HomeContext.Provider>
  );
};

const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("Home context used outside its provider");
  }
  return context;
};
export { useHomeContext, HomeContextProvider };
