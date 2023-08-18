import Navigation from "../route/navigation";
import React from "react";
import SideBar from "../components/side-bar/side-bar";
// import Header from "../components/header/header";
// import Footer from "../components/footer/footer";

const app = () => {
	return (
		<div className="app__container">
			<div className="app__sidebar">
				<SideBar />
			</div>
			<div className="app__navigation">
				<Navigation />
			</div>
			{/* <div className="">
				<Header />
				<Navigation />
				<Footer />
			</div> */}
		</div>
	);
};
/*
use router,use reducer & useContext
*/
export default app;
