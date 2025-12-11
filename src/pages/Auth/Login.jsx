import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { show, setShow, signInUser } = useAuth;
  const handleLogin = (data) => {
    console.log("form data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* password field */}
          <label className="label">Password</label>
          <input
            type={show ? "text" : "password"}
            {...register("password", { required: true })}
            className="input"
            placeholder="Password"
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-[50px] top-[135px] cursor-pointer z-50"
          >
            {show ? <FaEye /> : <IoEyeOff />}
          </span>
          {errors.password?.type === "required" && (
            <p className="text-red-500">
              Password must be 6 characters of longer.
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
