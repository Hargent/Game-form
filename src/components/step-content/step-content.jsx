import React from "react";

const StepContent = ({ step, text }) => {
	return (
		<div className="step-content__container">
			<h3>step&nbsp;{step}</h3>
			<h1>{text}</h1>
		</div>
	);
};

export default StepContent;
