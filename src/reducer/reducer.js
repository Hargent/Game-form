import { appData } from "../data/data";

const reducer = (state, action) => {
  const step = state.appData.step;
  // console.log(step);
  switch (action.type) {
    case "set-initial-state":
      // console.log(action.payload);
      return {
        ...state,
        appData: action.payload.appData,
        pageData: action.payload.pageData,
        userData: action.payload.userData
      };
    case "set-current-page":
      // console.log(state);
      return {
        ...state,
        appData: {
          ...state.appData,
          step: [...state.pageData].findIndex(
            (data) => data.page === action.payload
          ),
          currentPage: action.payload
        }
      };

    case "next-page":
      // console.log(state.appData.step);
      if (state.appData.step >= 5) {
        console.error(
          "Max number of steps is 5, change in the reducer to accommodate more page steps"
        );
        return {
          ...state,
          appData: { ...appData, step: step }
        };
      }
      const nextPage = state.pageData.at(state.appData.step + 1).page;

      return {
        ...state,
        appData: { ...appData, step: step + 1, currentPage: nextPage }
      };

    case "prev-page":
      // console.log(state.appData.step);
      if (state.appData.step <= 0) {
        return {
          ...state,
          appData: { ...appData, step: step }
        };
      }
      const prevPage = state.pageData.at(state.appData.step - 1).page;

      return {
        ...state,
        appData: { ...appData, step: step - 1, currentPage: prevPage }
      };

    case "set-duration":
      // console.log(state);
      console.log("setting", action.payload);
      return {
        ...state,
        userData: { ...state.userData, monthly: action.payload }
      };
    case "set-add-ons-data":
      return {
        ...state,

        userData: {
          ...state.userData,
          addOns: [...state.userData.addOns, ...action.payload]
        }
      };
    case "set-plans-data":
      return {
        ...state,
        userData: {
          ...state.userData,
          plan: action.payload
        }
      };
    case "set-user-info":
      return {
        ...state,
        userData: {
          ...state.userData,
          user: action.payload
        }
      };
    case "confirm-sub":
      return {
        ...state,
        userData: {
          ...state.userData,
          subConfirmed: action.payload
        }
      };

    default:
      throw new Error("401 error, No Reducer action type not found!");
  }
};

export default reducer;

/*
inital values
==>const steps = [
		{
			number: 1,
			info: "your info",
			isActive: "active"
		},
		{
			number: 2,
			info: "select plan",
			isActive: ""
		},
		{
			number: 3,
			info: "add-ons",
			isActive: ""
		},
		{
			number: 4,
			info: "summary",
			isActive: ""
		}
	];
	const Adds-on data = [
		{
			title: "Online services",
			content: "Access to multiplayer games",
			price: 1
		},
		{
			title: "Larger storage",
			content: "Extra 1TB of cloud save",
			price: 2
		},
		{
			title: "Customizable profile",
			content: "Custom theme on your profile",
			price: 2
		}
	];
	
==>const { header, paragraph } = {
		header: "Select your plan",
		paragraph: "You have the option of monthly or yearly billing"
	};
 */
