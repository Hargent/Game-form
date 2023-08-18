import Button from "../button/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<div className="footer__container">
			<Button onclick={() => navigate(-1)}>Go back</Button>
			<Button>Next step</Button>
		</div>
	);
};

export default Footer;
