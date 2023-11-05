import { useState, useRef } from "react";

import { UpIcon, DownIcon } from "../../images/icon/icon";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import formatCurrency from "../../utils/formatCurrent";

const ItemDetail = ({ detail, session }) => {
  const socketRef = useRef();
  const [numbOf, setNumbOf] = useState(1);
  const navigate = useNavigate();

  const addToCartHandler = () => {
    if (!session) {
      if (window.confirm("login or sign-up for get detail for your cart")) {
        return navigate("/login/sign-up");
      }
    }
    if (detail.total < numbOf) {
      return alert("total is not enought");
    }
    axios
      .post(
        `${process.env.REACT_APP_SERVER}add-detail/${detail._id}`,
        {
          quantity: numbOf,
        },
        {
          headers: {
            Authorization: session.session,
          },
        }
      )
      .then((response) => {
        if (response.data) {
          toast.success("product has been added");
        }
      })
      .then((result) => {
        socketRef.current = io.connect("http://localhost:5000");
        socketRef.current.emit("updateProduct", detail._id);
      })
      .catch((err) => console.log(err));
  };

  const description = (detail.long_desc ?? "").split(/\n|\.\s+/);

  return (
    <div className="row">
      <div className="col-6 row ms-2">
        <div className="col-3 d-flex flex-column ">
          <img src={detail.img1} className="card-img-top" alt="..." />
          <img src={detail.img2} className="card-img-top" alt="..." />
          <img src={detail.img3} className="card-img-top" alt="..." />
          <img src={detail.img4} className="card-img-top" alt="..." />
        </div>
        <div className="col-9">
          <img src={detail.img1} className="card-img-top" alt="..." />
        </div>
        <div className="col-9"></div>
      </div>
      <div className="col-6 px-5 d-flex flex-column justify-content-between">
        <h2>{detail.name}</h2>
        <p className="fs-5">{formatCurrency(detail.price)}</p>
        <p className="fs-5 fw-light">{detail.short_desc}</p>
        <p className="fs-5 fw-light">
          <span className="fw-semibold">CATEGORY:</span> {detail.category}
        </p>
        <h5>Total : {detail.total}</h5>
        <div className="d-flex border border-dark-subtle p-0 w-50">
          <p className=" mx-auto my-auto fw-light px-2">QUALITY</p>
          <button
            className="btn "
            onClick={() =>
              numbOf < 2 ? alert("Quantity too small") : setNumbOf(numbOf - 1)
            }
          >
            <DownIcon />
          </button>
          <p className="fw-semibold my-auto">{numbOf}</p>
          <button
            className="btn "
            onClick={() =>
              numbOf > 4 ? alert("Quantity too big!") : setNumbOf(numbOf + 1)
            }
          >
            <UpIcon />
          </button>
          <button
            className="fw-light h-100 d-block my-auto bg-dark text-white justify-self-end"
            onClick={addToCartHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="col-6 p-5 fw-light my-5">
        <button className="bg-dark p-2 fs-5 d-block text-white">
          DESCRIPTION
        </button>
        <span className="fs-4 fw-simebold d-block py-4">
          PRODUCT DESCIRPTION
        </span>
        {description.map((desc, index) => {
          return (
            <p key={index} className="fs-5">
              {desc}
            </p>
          );
        })}
      </div>
      <Toaster />
    </div>
  );
};

export default ItemDetail;
