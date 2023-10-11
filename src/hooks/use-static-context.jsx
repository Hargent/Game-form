import { StaticContext } from "../context/static-context";
import { useContext } from "react";

const useStaticContext = () => {
	const context = useContext(StaticContext);
	if (context === undefined)
		throw new Error("StaticContext used outside the StaticContextProvider");
	return context;
};
export default useStaticContext;
