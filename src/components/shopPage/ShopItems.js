import { useState } from "react";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrent";

const ShopItems = ({ product }) => {
  const [hover, setHover] = useState("1");
  const navigate = useNavigate();

  const handlerDetail = () => {
    navigate(`/details/${product._id}`);
  };

  return (
    <div
      className="col-4 p-4 text-center"
      onMouseEnter={() => {
        setHover("0.8");
      }}
      onMouseLeave={() => {
        setHover("1");
      }}
      style={{ opacity: hover, cursor: "pointer" }}
      onClick={handlerDetail}
    >
      <img src={product.img1} className="card-img-top" alt="..." />
      <div className="card-body">
        <span className=" fs-5">{product.name}</span>
        <p className="card-text fw-light fs-5">
          {formatCurrency(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ShopItems;
