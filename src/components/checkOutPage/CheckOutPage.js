import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BillingDetail from "./BillingDetail";
import OderDetail from "./OderDetail";
import axios from "axios";
import sessionUser from "../../utils/sessionUser";

const CheckOutPage = () => {
  const session = sessionUser();
  const navigate = useNavigate();

  const [order, setOrder] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}get-order`, {
        headers: {
          Authorization: session.session,
        },
      })
      .then((response) => setOrder(response.data.order))
      .catch((err) => console.log(err));
  }, [session.session]);

  const handlerToHome = () => {
    navigate("/home");
  };

  const handlerToCart = () => {
    navigate("/cart");
  };

  let content = <div className="row"></div>;

  if (order && order._id) {
    content = (
      <div className="row">
        <BillingDetail orderId={order._id} session={session} />
        <OderDetail order={order} />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className=" mb-5 bg-light p-5 d-flex justify-content-between align-items-center">
        <h1 className="fw-simebold px-5">CHECKOUT</h1>
        <div className="fw-light px-5 d-flex align-items-center">
          <p className="fw-bold fs-5 align-items-end">
            <a href="" className="btn fw-bold fs-5" onClick={handlerToHome}>
              Home
            </a>
            /
            <a href="" className="btn fw-bold fs-5" onClick={handlerToCart}>
              Cart
            </a>
            /<span className="btn text-muted  fw-bold fs-5">Checkout</span>
          </p>
        </div>
      </div>
      {content}
    </React.Fragment>
  );
};

export default CheckOutPage;
