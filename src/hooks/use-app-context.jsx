import { AppContext } from "../context/app-context";
import { useContext } from "react";

const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined)
		throw new Error("AppContext used outside the AppContextProvider");
	return context;
};
export default useAppContext;
