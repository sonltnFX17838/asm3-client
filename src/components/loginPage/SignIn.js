import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandle = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER}login/sign-in`, {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.session) {
          const session = {
            session: response.data.session,
            user: response.data.user,
          };
          localStorage.setItem("session", JSON.stringify(session));
          navigate("/");
        } else {
          alert("something wrong");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="m-auto p-5 d-block w-50 rounded-4 shadow-lg bg-white">
      <form className="d-flex flex-column" onSubmit={signInHandle}>
        <p className="fw-light fs-2 d-block m-auto pb-5">SIGN IN</p>

        <input
          type="email"
          placeholder="Email"
          className="p-4 mx-4 border border-dark-subtle"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mx-4 border border-dark-subtle"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="m-4 fs-5 fw-light text-white bg-dark py-4 ">
          SIGN IN
        </button>
        <p className="fw-light d-block m-auto ">
          Creater account?{" "}
          <a href="" onClick={() => navigate("/login/sign-up")}>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
