import { Outlet } from "react-router";
import Footer from "../shared/Footer.jsx";
import Navbar from "../shared/Navbar.jsx";
const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
