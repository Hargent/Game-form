import Info from "../../ui/info/info";
import { InfoContextProvider } from "../../ui/info/info-context";
import React from "react";

const InfoPage = () => {
  return (
    <InfoContextProvider>
      <Info />
    </InfoContextProvider>
  );
};

export default InfoPage;
