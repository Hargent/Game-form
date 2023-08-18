import React from "react";

import PlanCard from "../../components/plan-card/plan-card";

const Plans = () => {
	// const BASE_URL = "../../assets/images";
	const planData = [
		{
			iconUrl: "icon-arcade.svg",
			type: "Arcade",
			rate: {
				value: "90",
				duration: "yr"
			},
			discount: {
				value: "2",
				duration: "months"
			}
		},
		{
			iconUrl: "icon-arcade.svg",
			type: "advanced",
			rate: {
				value: "90",
				duration: "yr"
			},
			discount: {
				value: "2",
				duration: "months"
			}
		},
		{
			iconUrl: "icon-arcade.svg",
			type: "Pro",
			rate: {
				value: "90",
				duration: "yr"
			},
			discount: {
				value: "2",
				duration: "months"
			}
		}
	];
	return (
		<div className="plans__container">
			<ul className="plans__list">
				{planData.map((plan, i) => (
					<PlanCard planData={plan} key={`${plan.type}-${i}`} />
				))}
			</ul>
			<p>duration switch</p>
		</div>
	);
};

export default Plans;
