import React from "react";
import Thanks from "../../ui/thanks/thanks";
import { ThanksContextProvider } from "../../ui/thanks/thanks-context";

const ThanksPage = () => {
  return (
    <ThanksContextProvider>
      <Thanks />
    </ThanksContextProvider>
  );
};

export default ThanksPage;
