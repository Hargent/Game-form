import React, { useState } from "react";

const Switch = ({ getSwitchData, defaultValue }) => {
  const [toggle, setToggle] = useState(defaultValue);

  //   useEffect(() => {
  //     setToggle(defaultValue);
  //   }, []);
  // console.log(toggle, "switch toggle");
  const handleChange = () => {
    setToggle((val) => !val);
    getSwitchData(toggle);
  };
  return (
    <div
      className="switch__container"
      onClick={() => {
        handleChange();
      }}
    >
      <button
        className={`switch__btn ${!toggle ? "switch__btn-move-right" : ""}`}
      >
        &nbsp;
      </button>
    </div>
  );
};

export default Switch;
