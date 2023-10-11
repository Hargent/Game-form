import { Outlet } from "react-router-dom";
import React from "react";
import SideBar from "../side-bar/side-bar";

const AppLayout = () => {
  return (
    <div className="app__container">
      <div className="app__sidebar">
        <SideBar />
      </div>
      <div className="app__navigation">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
