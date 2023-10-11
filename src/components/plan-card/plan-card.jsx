import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as Advanced } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as Arcade } from "../../assets/images/icon-arcade.svg";
import { DURATION_PRICE } from "../../utils/constants/duration-price";
import { ReactComponent as Pro } from "../../assets/images/icon-pro.svg";
import { usePlansContext } from "../../ui/plans/plans-context";

const PlanCard = ({ planData, addCheckedItem, checkedItem }) => {
  const cardRef = useRef();

  const [isActive, setIsActive] = useState(cardRef.current?.id === checkedItem);

  const { type, rate, discount } = planData;
  const { isMonthly } = usePlansContext();

  let Icon;
  switch (type.toLowerCase()) {
    case "arcade":
      Icon = <Arcade />;
      break;
    case "advanced":
      Icon = <Advanced />;
      break;
    case "pro":
      Icon = <Pro />;
      break;
    default:
      throw new Error(`${type} Icon not found.`);
  }
  const handleCheck = () => {
    const checkedPlanData = { ...planData };

    if (isMonthly) {
      addCheckedItem(checkedPlanData);
    } else {
      checkedPlanData.rate = checkedPlanData.rate * DURATION_PRICE;
      addCheckedItem(checkedPlanData);
    }
  };
  useEffect(() => {
    setIsActive(cardRef.current.id === checkedItem);
  }, [checkedItem]);
  return (
    <li
      id={type}
      ref={cardRef}
      className={`plan-card__container plan-card__container-${
        isActive ? "active" : ""
      } `}
      onClick={() => handleCheck()}
    >
      <div className="plan-card-icon">{Icon}</div>

      <h3 className="plan-card-type">{type}</h3>
      <p className="plan-card-rate">
        ${isMonthly ? rate : rate * DURATION_PRICE}/{isMonthly ? "mo" : "yr"}
      </p>
      {!isMonthly ? (
        <p className="plan-card-discount">{discount}&nbsp;months&nbsp;free</p>
      ) : null}
    </li>
  );
};

export default PlanCard;
