import React from "react";
import { useNavigate } from "react-router-dom";

import { CartIcon2 } from "../../../images/icon/icon";
import formatCurrency from "../../../utils/formatCurrent";

const PopUp = ({ product, handlePopUp }) => {
  const navigate = useNavigate();
  const handlerDetail = () => {
    navigate(`/details/${product._id}`);
  };

  return (
    <div className="w-100 h-100 position-fixed top-0 start-0 bg-dark p-2 bg-opacity-25">
      <div className="row g-0 z-3 bg-white w-75 m-auto my-5">
        <div className="col-6">
          <img
            src={product.img1}
            className="img-fluid rounded-start p-4"
            alt="..."
          />
        </div>
        <div className="col-6 px-5">
          <div className="card-body position-relative py-5">
            <button
              className="position-absolute top-0 end-0 btn"
              onClick={() => handlePopUp()}
            >
              X
            </button>
            <h5 className="card-title pt-4 px-5 text-center">{product.name}</h5>
            <p className="card-text text-center">
              <small className="text-muted fs-5">
                {formatCurrency(product.price)}
              </small>
            </p>
            <p className="card-text">{product.short_desc}</p>
            <button
              className="bg-dark w-50 btn d-flex p-0"
              onClick={handlerDetail}
            >
              <CartIcon2 />
              <p
                className=" fs-6 fw-light text-light m-auto ms-2 italic"
                style={{ fontStyle: "italic" }}
              >
                VIEW DETAIL
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
