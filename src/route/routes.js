import AddOnsPage from "../pages/add-ons-page/add-ons-page";
import AppLayout from "../ui/app-layout/app-layout";
import HomePage from "../pages/home-page/home-page";
import InfoPage from "../pages/info-page/info-page";
import PageNotFound from "../pages/page-not-found/page-not-found";
import PlansPage from "../pages/plans-page/plans-page";
import SummaryPage from "../pages/summary-page/summary-page";
import ThanksPage from "../pages/thanks-page/thanks-page";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "info",
        element: <InfoPage />
      },
      {
        path: "plans",
        element: <PlansPage />
      },
      {
        path: "summary",
        element: <SummaryPage />
      },
      {
        path: "add-ons",
        element: <AddOnsPage />
      },
      {
        path: "thanks",
        element: <ThanksPage />
      }
    ]
  }
]);

export default Routes;
