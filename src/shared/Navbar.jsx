import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { MoonLoader } from "react-spinners";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const { user, loading, logOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("in the logout", location);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
        navigate(location?.state || "/");
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="">Services</NavLink>
      </li>
      <li>
        <NavLink to="about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="sendParcel">Send Parcel</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-[1650px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="btn btn-ghost hidden"></div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <MoonLoader />
        ) : user ? (
          <a onClick={handleLogOut} className="btn">
            Log Out
          </a>
        ) : (
          <Link to="/login" className="btn">
            Log In
          </Link>
        )}
        <Link to="/rider" className="btn btn-primary text-black mx-4">
          Be a Rider
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
