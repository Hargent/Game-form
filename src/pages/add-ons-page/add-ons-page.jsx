import AddOns from "../../ui/add-ons/add-ons";
import { AddOnsContextProvider } from "../../ui/add-ons/add-ons-context";
import React from "react";

const AddOnsPage = () => {
  return (
    <AddOnsContextProvider>
      <AddOns />
    </AddOnsContextProvider>
  );
};

export default AddOnsPage;
