import { createContext, useContext } from "react";

import useAppContext from "../../hooks/use-app-context";

const InfoContext = createContext();

const InfoContextProvider = ({ children }) => {
  const { state, setState } = useAppContext();
  const handleUserInfo = (info) => {
    setState({ type: "set-user-info", payload: info });
  };
  const pageData = state.pageData.filter((page) => page.page === "info")?.[0]
    ?.data;

  return (
    <InfoContext.Provider value={{ handleUserInfo, pageData }}>
      {children}
    </InfoContext.Provider>
  );
};

const useInfoContext = () => {
  const context = useContext(InfoContext);
  if (!context) {
    throw new Error("Info context used outside its provider");
  }
  return context;
};
export { useInfoContext, InfoContextProvider };
