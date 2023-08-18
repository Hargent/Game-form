import React from "react";

const StepIcon = ({ content, additionalClass = "" }) => {
	return (
		<div className={`step-icon__container step-icon__${additionalClass}`}>
			<span className="step-icon__content">{content}</span>
		</div>
	);
};

export default StepIcon;
