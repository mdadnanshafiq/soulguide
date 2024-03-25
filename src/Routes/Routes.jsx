import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Donation from "../Pages/Donation/Donation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/stats",
        element: <h1>stats</h1>,
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails></DonationDetails>,
      },
    ],
  },
]);

export default router;
