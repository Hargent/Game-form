import { createContext, useContext } from "react";

import useAppContext from "../../hooks/use-app-context";

const AddOnsContext = createContext();

const AddOnsContextProvider = ({ children }) => {
  const { state, setState } = useAppContext();

  const pageData = state.pageData.filter((page) => page.page === "add-ons")?.[0]
    ?.data;
  const isMonthly = state.userData.monthly;

  pageData.checkedItems = state.userData.addOns;
  const submitAddOnsData = (data) => {
    setState({ type: "set-add-ons-data", payload: data });
  };
  return (
    <AddOnsContext.Provider value={{ pageData, isMonthly, submitAddOnsData }}>
      {children}
    </AddOnsContext.Provider>
  );
};

const useAddOnsContext = () => {
  const context = useContext(AddOnsContext);
  if (!context) {
    throw new Error("AddOns context used outside its provider");
  }
  return context;
};
export { useAddOnsContext, AddOnsContextProvider };
