import React from "react";
import StepContent from "../step-content/step-content";
import StepIcon from "../step-icon/step-icon";

const Step = ({ stepContent }) => {
	const { number, info, isActive } = stepContent;
	return (
		<div className="step__container">
			<StepIcon additionalClass={isActive} content={number} />
			<StepContent step={number} text={info} />
		</div>
	);
};

export default Step;
