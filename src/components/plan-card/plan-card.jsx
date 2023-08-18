import React from "react";
import { ReactComponent as Arcade } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as Advanced } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as Pro } from "../../assets/images/icon-pro.svg";

const PlanCard = ({ planData, additionalClass = "" }) => {
	const { type, rate, discount } = planData;

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
	return (
		<li
			className={`plan-card__container plan-card__container-${additionalClass}`}>
			<div className="plan-card-icon">{Icon}</div>

			<h3 className="plan-card-type">{type}</h3>
			<p className="plan-card-rate">
				💲{rate.value}/{rate.duration}
			</p>
			<p className="plan-card-discount">
				{discount.value}&nbsp;{discount.duration}&nbsp;free
			</p>
		</li>
	);
};

export default PlanCard;
