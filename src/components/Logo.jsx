import mainLogo from "../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={mainLogo} alt="logo" />
      <h3 className="text-4xl font-bold -ms-2.5">zapShift</h3>
    </div>
  );
};

export default Logo;
