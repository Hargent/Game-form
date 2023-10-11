import React from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "../route/routes";

const App = () => {
  return (
    <RouterProvider
      router={Routes}
      fallbackElement={<React.Fragment>Loading ...</React.Fragment>}
    />
  );
};
/*
use router,use reducer & useContext
*/
export default App;
