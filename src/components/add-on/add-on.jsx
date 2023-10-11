import React, { useState } from "react";

import { DURATION_PRICE } from "../../utils/constants/duration-price";
import checkIcon from "../../assets/images/icon-checkmark.svg";
import { useAddOnsContext } from "../../ui/add-ons/add-ons-context";

const AddOn = ({ addOn, addCheckedItem, checkedItem }) => {
  const [checked, setChecked] = useState(
    [...checkedItem].includes(addOn.title)
  );
  const { isMonthly } = useAddOnsContext();

  const { title, content, price } = addOn;

  const handleCheck = () => {
    setChecked((chk) => !chk);
    const checkedAddOn = { ...addOn };
    if (isMonthly) {
      addCheckedItem(checkedAddOn);
    } else {
      checkedAddOn.price = checkedAddOn.price * DURATION_PRICE;
      addCheckedItem(checkedAddOn);
    }
  };
  return (
    <div
      onClick={handleCheck}
      className={`add-on__container ${
        checked ? "add-on__container-checked" : ""
      }`}
    >
      <div className="add-on__details">
        <div className={`add-on__details-input ${checked ? "check" : ""}`}>
          {checked ? (
            <img src={checkIcon} alt="✔️" />
          ) : (
            <input type="checkbox" />
          )}
        </div>
        <div className="add-on__details-content">
          <p className="add-on__details-content--title">{title}</p>
          <p className="add-on__details-content--text">{content}</p>
        </div>
      </div>
      <div className="add-on__pricing">
        +${isMonthly ? price : price * DURATION_PRICE}/{isMonthly ? "mo" : "yr"}
      </div>
    </div>
  );
};

export default AddOn;
