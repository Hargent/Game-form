import React from "react";
import Summary from "../../ui/summary/summary";
import { SummaryContextProvider } from "../../ui/summary/summary-context";

const SummaryPage = () => {
  return (
    <SummaryContextProvider>
      <Summary />
    </SummaryContextProvider>
  );
};

export default SummaryPage;
