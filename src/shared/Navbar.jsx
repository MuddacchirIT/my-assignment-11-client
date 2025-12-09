import { NavLink } from "react-router";
import Logo from "../components/Logo";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="">Services</NavLink>
      </li>
      <li>
        <NavLink to="">Services</NavLink>
      </li>
      <li>
        <NavLink to="">Services</NavLink>
      </li>
      <li>
        <NavLink to="">Services</NavLink>
      </li>
      <li>
        <NavLink to="">Services</NavLink>
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
        <a className="btn-primary">Log In</a>
      </div>
    </div>
  );
};

export default Navbar;
