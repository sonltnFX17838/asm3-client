import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FULL_NAME":
      return { ...state, fullName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const SignUp = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const signUpHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_PHONE_NUMBER",
      payload: parseInt(state.phoneNumber),
    });
    axios
      .post(`${process.env.REACT_APP_SERVER}login/sign-up`, {
        user: state,
      })
      .then((response) => {
        if (response.data.success) {
          dispatch({ type: "RESET" });
          navigate("/login/sign-in");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="m-auto p-5 d-block w-50 rounded-4 shadow-lg bg-white">
      <form className="d-flex flex-column" onSubmit={signUpHandle}>
        <p className="fw-light fs-2 d-block m-auto pb-5">SIGN UP</p>

        <input
          type="text"
          placeholder="Full Name"
          className="p-4 mx-4 border border-dark-subtle"
          onChange={(e) =>
            dispatch({ type: "SET_FULL_NAME", payload: e.target.value })
          }
          value={state.fullName}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-4 mx-4 border border-dark-subtle"
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          value={state.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mx-4 border border-dark-subtle"
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          value={state.password}
        />
        <input
          type="text"
          placeholder="Phone"
          className="p-4 mx-4 border border-dark-subtle"
          onChange={(e) =>
            dispatch({ type: "SET_PHONE_NUMBER", payload: e.target.value })
          }
          value={state.phoneNumber}
        />

        <button className="m-4 fs-5 fw-light text-white bg-dark py-4 ">
          SIGN UP
        </button>
        <p className="fw-light d-block m-auto ">
          Login?{" "}
          <a href="" onClick={() => navigate("/login/sign-in")}>
            Click
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
