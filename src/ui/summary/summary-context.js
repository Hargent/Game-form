import { createContext, useContext } from "react";

import useAppContext from "../../hooks/use-app-context";

const SummaryContext = createContext();

const SummaryContextProvider = ({ children }) => {
  const { state, setState } = useAppContext();

  const pageData = state.pageData.filter((page) => page.page === "summary")?.[0]
    ?.data;
  const summaryData = state.userData;

  const handleSubConfirmation = (isConfirm) => {
    setState({ type: "confirm-sub", payload: isConfirm });
  };
  return (
    <SummaryContext.Provider
      value={{ pageData, summaryData, handleSubConfirmation }}
    >
      {children}
    </SummaryContext.Provider>
  );
};

const useSummaryContext = () => {
  const context = useContext(SummaryContext);
  if (!context) {
    throw new Error("Summary context used outside its provider");
  }
  return context;
};
export { useSummaryContext, SummaryContextProvider };
