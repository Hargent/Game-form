import React from "react";

const Button = ({ children, additionalClass = "", onClick = null }) => {
	return (
		<button className={`button btn-${additionalClass}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
