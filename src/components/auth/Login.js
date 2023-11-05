import { Navigate, Outlet } from "react-router-dom";
import sessionUser from "../../utils/sessionUser";

const Login = () => {
  const session = sessionUser();
  if (session) {
    return <Outlet />;
  }
  return <Navigate to="/login/sign-in" />;
};
export default Login;
