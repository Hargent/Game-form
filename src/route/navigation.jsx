import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddOns from "../pages/add-ons/add-ons";
import Home from "../pages/home/home";
import Info from "../pages/info/info";
import PageNotFound from "../pages/page-not-found/page-not-found";
import Plans from "../pages/plans/plans";
import React from "react";
import Summary from "../pages/summary/summary";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Navigation = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="info" element={<Info />} />
				<Route path="plans" element={<Plans />} />
				<Route path="add-ons" element={<AddOns />} />
				<Route path="summary" element={<Summary />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default Navigation;
