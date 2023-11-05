import React, { useState } from "react";

import PopUp from "./PopUp";
import formatCurrency from "../../../utils/formatCurrent";

const ItemTopTrend = ({ product }) => {
  // opacti khi hover
  const [hover, setHover] = useState("1");
  const [show, setShow] = useState(false);

  const handlePopUp = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <div
        className="col-3 p-4 text-center pe-auto cursor-pointer"
        onMouseEnter={() => {
          setHover("0.8");
        }}
        onMouseLeave={() => {
          setHover("1");
        }}
        style={{ opacity: hover }}
        onClick={handlePopUp}
      >
        <img src={product.img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className=" fs-5">{product.name}</span>
          <p className="card-text fw-light fs-5">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
      {show && <PopUp product={product} handlePopUp={handlePopUp} />}
    </React.Fragment>
  );
};

export default ItemTopTrend;
