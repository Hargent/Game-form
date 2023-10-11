import React, { useEffect, useState } from "react";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import PlanCard from "../../components/plan-card/plan-card";
import Switch from "../../utils/switch/switch";
import { usePlansContext } from "./plans-context";

const Plans = () => {
  const { pageData, handleUserPlans, isMonthly, submitPlansData } =
    usePlansContext();
  const [toggle, setToggle] = useState(isMonthly);

  const [checkedItem, setCheckedItem] = useState(
    pageData.checkedPlan.length > 0
      ? pageData.checkedPlan
      : [pageData.content.at(0)]
  );

  const addCheckedItem = (item) => {
    const isContains =
      checkedItem.filter((checkedItem) => checkedItem.type === item.type)
        .length === 0;
    if (isContains) {
      setCheckedItem([item]);
    }
    return item.type;
  };
  const setDuration = () => {
    setToggle((value) => !value);
    return toggle;
  };
  useEffect(() => {
    handleUserPlans(toggle);
  }, [toggle,handleUserPlans]);

  const submitPageData = () => {
    submitPlansData(checkedItem);
  };

  return (
    <>
      <Header title={pageData.header.title} content={pageData.header.content} />

      <div className="plans__container ">
        <ul className="plans__list">
          {pageData.content.map((plan, i) => (
            <PlanCard
              addCheckedItem={addCheckedItem}
              checkedItem={checkedItem[0]?.type}
              planData={plan}
              duration={toggle ? "yearly" : "monthly"}
              key={`${plan.type}-${i}`}
            />
          ))}
        </ul>
        <div className="plans__duration">
          <p className={`${toggle ? "plans__duration-period" : ""}`}>Monthly</p>
          <div className="plans__duration-switch">
            <Switch getSwitchData={setDuration} defaultValue={isMonthly} />
          </div>
          <p className={`${!toggle ? "plans__duration-period" : ""}`}>Yearly</p>
        </div>
      </div>
      <Footer
        next={pageData.footer.next}
        prev={pageData.footer.prev}
        both={true}
        submitPageData={submitPageData}
      />
    </>
  );
};

export default Plans;
// const BASE_URL = "../../assets/images";
// const planData = [...plansData];
// [
// 	{
// 		iconUrl: "icon-arcade.svg",
// 		type: "Arcade",
// 		rate: {
// 			value: "90",
// 			duration: "yr"
// 		},
// 		discount: {
// 			value: "2",
// 			duration: "months"
// 		},
// 		isActive: "active"
// 	},
// 	{
// 		iconUrl: "icon-arcade.svg",
// 		type: "advanced",
// 		rate: {
// 			value: "120",
// 			duration: "yr"
// 		},
// 		discount: {
// 			value: "2",
// 			duration: "months"
// 		},
// 		isActive: ""
// 	},
// 	{
// 		iconUrl: "icon-arcade.svg",
// 		type: "Pro",
// 		rate: {
// 			value: "150",
// 			duration: "yr"
// 		},
// 		discount: {
// 			value: "2",
// 			duration: "months"
// 		},
// 		isActive: ""
// 	}
// ];
