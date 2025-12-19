import axios from "axios";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
const Register = () => {
  const { show, setShow, registerUser, updateUserProfile, logOut } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("in the register", location);
  const handleRegistration = (data) => {
    console.log("after register", data.photo[0]);
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);
        //  2.send the photo to store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(image_API_URL, formData).then((res) => {
          console.log("after image upload", res.data.data.url);
          // updata user profile
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              logOut().then(() => {
                console.log("user profile updated done");
                navigate("/login");
              });
            })
            .catch((error) => console.log(error));
        });
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
          {/* name field */}
          <label className="label ml-2">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input mx-auto"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}
          {/* photo or image field */}
          <label className="label ml-2">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input mx-auto"
            placeholder="Your Photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">Photo is required.</p>
          )}
          {/* email field */}
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
            className="absolute right-[50px] top-[239px] cursor-pointer z-50"
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
        <SocialLogin></SocialLogin>
        <p className="text-md text-end mx-2">
          Already have an account?{" "}
          <Link state={location.state} to="/login">
            <span className="text-blue-500 underline">Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
