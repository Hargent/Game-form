import React from "react";

const Header = () => {
	const { header, paragraph } = {
		header: "Select your plan",
		paragraph: "You have the option of monthly or yearly billing."
	};
	return (
		<div className="header__container">
			<h1>{header}</h1>
			<p>{paragraph}</p>
		</div>
	);
};

export default Header;
