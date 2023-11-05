import axios from "axios";
import { useReducer } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const initialState = {
  orderDay: "",
  fullNameOrder: "",
  emailOrder: "",
  phoneNumberOrder: "",
  addressOrder: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FULL_NAME":
      return { ...state, fullNameOrder: action.payload };
    case "SET_EMAIL":
      return { ...state, emailOrder: action.payload };
    case "SET_PHONE_NUMBER":
      return { ...state, phoneNumberOrder: action.payload };
    case "SET_ADDRESS":
      return { ...state, addressOrder: action.payload };
  }
}

const BillingDetail = ({ orderId, session }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleOrderComplete = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_SERVER}update-order/${orderId}`,
        {
          order: state,
        },
        {
          headers: {
            Authorization: session.session,
          },
        }
      )
      .then((response) => {
        if (response.data) {
          toast.success("ok");
          console.log(response.data.order);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="px-5 col-7" onSubmit={handleOrderComplete}>
      <h2>BILLING DETAIL</h2>
      <div>
        <p className="my-2">FULL NAME:</p>
        <input
          type="text"
          placeholder="Enter Your Full Name Here!"
          className="h-100 w-100 p-2 mb-2"
          value={state.fullNameOrder}
          onChange={(e) =>
            dispatch({ type: "SET_FULL_NAME", payload: e.target.value })
          }
        />
      </div>
      <div>
        <p className="my-2">EMAIL:</p>
        <input
          type="email"
          placeholder="Enter Your Email Here!"
          className="h-100 w-100 p-2 mb-2"
          value={state.emailOrder}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
      </div>
      <div>
        <p className="my-2">PHONE NUMBER:</p>
        <input
          type="text"
          placeholder="Enter Your Phone Number Here!"
          className="h-100 w-100 p-2 mb-2"
          value={state.phoneNumberOrder}
          onChange={(e) =>
            dispatch({ type: "SET_PHONE_NUMBER", payload: e.target.value })
          }
        />
      </div>
      <div>
        <p className="my-2">ADDRESS:</p>
        <input
          type="text"
          placeholder="Enter Your Address Here!"
          className="h-100 w-100 p-2 mb-3"
          value={state.addressOrder}
          onChange={(e) =>
            dispatch({ type: "SET_ADDRESS", payload: e.target.value })
          }
        />
      </div>
      <div>
        <button className=" px-4 py-2 text-white bg-dark" type="submit">
          Place order
        </button>
      </div>
      <Toaster />
    </form>
  );
};

export default BillingDetail;
