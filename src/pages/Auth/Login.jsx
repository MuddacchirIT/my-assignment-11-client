import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { show, setShow, signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("in the login page", location);

  const handleLogin = (data) => {
    console.log("form data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4 mt-4">
      <h3 className="text-3xl text-center font-bold mb-4">Welcome back</h3>
      <h4 className="text-2xl text-center font-semibold">Please Login</h4>
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          {/* email field */}
          <label className="label ml-2">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input mx-auto"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* password field */}
          <label className="label ml-2">Password</label>
          <input
            type={show ? "text" : "password"}
            {...register("password", { required: true })}
            className="input mx-auto"
            placeholder="Password"
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-[50px] top-[236px] cursor-pointer z-50"
          >
            {show ? <FaEye /> : <IoEyeOff />}
          </span>
          {errors.password?.type === "required" && (
            <p className="text-red-500">
              Password must be 6 characters of longer.
            </p>
          )}
          <div>
            <a className="link link-hover ml-2">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4 mx-2">Login</button>
        </fieldset>
        <SocialLogin></SocialLogin>
        <p className="text-md text-end mx-2">
          New to zapShift?{" "}
          <Link state={location.state} to="/register">
            <span className="text-blue-500 underline">Register</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
