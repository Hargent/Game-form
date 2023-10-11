import React from "react";
import SideBarBg from "./side-bar-bg";
import Step from "../../components/step/step";

const SideBar = () => {
  const steps = [
    {
      number: 1,
      info: "your info",
      isActive: "active"
    },
    {
      number: 2,
      info: "select plan",
      isActive: ""
    },
    {
      number: 3,
      info: "add-ons",
      isActive: ""
    },
    {
      number: 4,
      info: "summary",
      isActive: ""
    }
  ];
  return (
    <div className="sidebar__container">
      <div className="sidebar__bg">
        <SideBarBg />
      </div>
      <div className="sidebar__steps">
        {steps.map((step, index) => (
          <Step stepContent={step} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
