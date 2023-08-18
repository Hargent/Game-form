import { ReactComponent as Desktop } from "../../assets/images/bg-sidebar-desktop.svg";
import { ReactComponent as Mobile } from "../../assets/images/bg-sidebar-mobile.svg";
import React from "react";
import useMediaQuery from "../../hooks/use-media-query";

const SideBarBg = () => {
	const isMobile = useMediaQuery({
		screen: "800px",
		type: "max"
	});

	return isMobile ? <Mobile /> : <Desktop />;
	// return isMobile ? <Mobile /> : <Desktop />;
};

export default SideBarBg;
