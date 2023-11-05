import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CartItems from "./CartItems";
import CartTotail from "./CartTotal";
import { CheckOutIcon, GoShopIcon } from "../../images/icon/icon";
import sessionUser from "../../utils/sessionUser";

const CartPage = () => {
  const session = sessionUser();
  const navigate = useNavigate();
  const [order, setOrder] = useState(false);
  const handleGetOrder = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}get-order`, {
        headers: {
          Authorization: session.session,
        },
      })
      .then((response) => setOrder(response.data.order))
      .catch((err) => console.log(err));
  }, [session.session]);

  useEffect(() => {
    handleGetOrder();
  }, [handleGetOrder]);

  let content = (
    <div>
      <h2>
        <a href="/shop" className="mx-5">
          {">>>>> "}
          Go Shop
        </a>
      </h2>
    </div>
  );

  if (order) {
    content = (
      <div className="row">
        <div className="col-8">
          <CartItems
            cartItems={order.cart.items}
            getOrder={handleGetOrder}
            orderId={order._id}
            session={session}
          />
          <div className="p-4 px-5 d-flex justify-content-between bg-light">
            <button onClick={() => navigate("/shop")} className="btn d-flex">
              <GoShopIcon />
              <p className=" fs-4 fw-light my-auto">Continue shopping</p>
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="px-3 border  border-dark d-flex"
            >
              <p className=" fs-4 fw-light my-auto">Procceed to checkout</p>
              <CheckOutIcon />
            </button>
          </div>
        </div>
        <CartTotail totalPrice={order.cart.totalPrice} />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className=" mb-5 bg-light p-5 d-flex justify-content-between align-items-center">
        <h1 className="fw-simebold px-5">CART</h1>
        <p className="fw-light px-5">CART</p>
      </div>
      <div>
        <h2 className="fw-light ps-2">SHOPPING CART</h2>
      </div>
      {content}
    </React.Fragment>
  );
};

export default CartPage;
