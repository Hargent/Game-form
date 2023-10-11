import { createContext, useContext } from "react";

import useAppContext from "../../hooks/use-app-context";

const PlansContext = createContext();

const PlansContextProvider = ({ children }) => {
  const { state, setState } = useAppContext();
  const handleUserPlans = (plans) => {
    // console.log(plans);

    if (plans !== state.appData.monthly) {
      setState({ type: "set-duration", payload: plans });
    }
  };
  const pageData = state.pageData.filter((page) => page.page === "plans")?.[0]
    ?.data;

  pageData.checkedPlan = state.userData.plan;
  const submitPlansData = (data) => {
    setState({ type: "set-plans-data", payload: data });
  };
  const isMonthly = state.userData.monthly;
  return (
    <PlansContext.Provider
      value={{ handleUserPlans, pageData, isMonthly, submitPlansData }}
    >
      {children}
    </PlansContext.Provider>
  );
};

const usePlansContext = () => {
  const context = useContext(PlansContext);
  if (!context) {
    throw new Error("Plans context used outside its provider");
  }
  return context;
};
export { usePlansContext, PlansContextProvider };
