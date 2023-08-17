import Navigation from "../route/navigation";
import React from "react";
import SideBar from "../components/side-bar/side-bar";

const app = () => {
	return (
		<div className="app">
			<SideBar />
			<Navigation />
		</div>
	);
};
/*
use router,use reducer & useContext
*/
export default app;
