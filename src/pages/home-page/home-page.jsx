import Home from "../../ui/home/home";
import { HomeContextProvider } from "../../ui/home/home-context";
import React from "react";

const HomePage = () => {
  return (
    <HomeContextProvider>
      <Home />
    </HomeContextProvider>
  );
};

export default HomePage;
