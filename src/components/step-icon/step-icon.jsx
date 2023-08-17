import React from "react";

const StepIcon = ({ content, additionalClass = "" }) => {
	return (
		<div className={`step-icon__container ${additionalClass}`}>
			<span>{content}</span>
		</div>
	);
};

export default StepIcon;
