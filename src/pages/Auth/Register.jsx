import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const { show, setShow, registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    console.log("after register", data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 mt-4">
      <h3 className="text-3xl text-center font-bold mb-4">Welcome to</h3>
      <h4 className="text-2xl text-center font-semibold">Registration</h4>
      <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <fieldset className="fieldset">
          <label className="label ml-2">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input mx-auto"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required.</p>
          )}
          {/* password field */}
          <label className="label ml-2">Password</label>
          <input
            type={show ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            className="input mx-auto"
            placeholder="Password"
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-[50px] top-[240px] cursor-pointer z-50"
          >
            {show ? <FaEye /> : <IoEyeOff />}
          </span>
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must have uppercase, at least one lowercase, at least one
              number and on special characters.
            </p>
          )}
          <div>
            <a className="link link-hover ml-2">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4 mx-2">Register</button>
        </fieldset>
        <p className="text-md text-end mx-2">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-blue-500 underline">Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
