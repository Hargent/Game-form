import React from "react";
import StepContent from "../step-content/step-content";
import StepIcon from "../step-icon/step-icon";
import useMediaQuery from "../../hooks/use-media-query";

const Step = ({ stepContent }) => {
  const { number, info, isActive } = stepContent;
  const isMobile = useMediaQuery({
    screen: "800px",
    type: "max"
  });
  return (
    <div className="step__container">
      <StepIcon additionalClass={isActive} content={number} />
      {isMobile ? null : <StepContent step={number} text={info} />}
    </div>
  );
};

export default Step;
