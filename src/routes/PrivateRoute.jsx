import { Oval } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-60">
        <Oval height={100} width={100} color="#4fa94d" visible={true} />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
