import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import RootLayout from "../layouts/RootLayout";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Coverage from "../pages/Coverage";
import Home from "../pages/Home";
import Mission from "../pages/subRouter/Mission";
import Story from "../pages/subRouter/Story";
import Success from "../pages/subRouter/Success";
import TeamOthers from "../pages/subRouter/TeamOthers";
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
]);
