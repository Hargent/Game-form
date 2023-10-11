import Plans from "../../ui/plans/plans";
import { PlansContextProvider } from "../../ui/plans/plans-context";
import React from "react";

const PlansPage = () => {
  return (
    <PlansContextProvider>
      <Plans />
    </PlansContextProvider>
  );
};

export default PlansPage;
