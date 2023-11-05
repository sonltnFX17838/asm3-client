import { Navigate, useParams } from "react-router-dom";

import banner1 from "../../images/banner1.jpg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import sessionUser from "../../utils/sessionUser";

const LoginPage = () => {
  const session = sessionUser();
  console.log(session);
  const { sign } = useParams();
  return (
    <div
      style={{
        backgroundImage: `url(${banner1})`,
        backgroundSize: "125%",
        backgroundRepeat: "repeat",
        with: "auto",
        height: "800px",
      }}
      className="ps-5 d-flex mb-5  "
    >
      {session && <Navigate to="/home" />}
      {sign === "sign-up" && <SignUp />}
      {sign === "sign-in" && <SignIn />}
    </div>
  );
};

export default LoginPage;
