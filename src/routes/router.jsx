import { createBrowserRouter } from "react-router";
import SendParcel from "../components/SendParcel";
import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../layouts/DashboardLayout";
import RootLayout from "../layouts/RootLayout";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Coverage from "../pages/Coverage";
import MyParcels from "../pages/Dashboard/MyParcels";
import Payment from "../pages/Dashboard/Payment";
import Home from "../pages/Home";
import Rider from "../pages/Rider";
import Mission from "../pages/subRouter/Mission";
import Story from "../pages/subRouter/Story";
import Success from "../pages/subRouter/Success";
import TeamOthers from "../pages/subRouter/TeamOthers";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "about-us",
        Component: AboutUs,
        children: [
          {
            path: "story",
            Component: Story,
          },
          {
            path: "mission",
            Component: Mission,
          },
          {
            path: "success",
            Component: Success,
          },
          {
            path: "team&others",
            Component: TeamOthers,
          },
        ],
      },
      {
        path: "coverage",
        Component: Coverage,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
    ],
  },
]);
