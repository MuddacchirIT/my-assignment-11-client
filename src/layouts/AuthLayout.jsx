import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import Logo from "../components/Logo";
const AuthLayout = () => {
  return (
    <div className="max-w-[1100px] mx-auto pt-20">
      <Logo></Logo>
      <div className="flex items-center">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
