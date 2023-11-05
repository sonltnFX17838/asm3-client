import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemsCategory = (props) => {
  // chuyển trang với useNav
  const navigate = useNavigate();

  const handlerGoShop = () => {
    navigate("/shop");
  };

  // set opacti khi hover
  const [hover, setHover] = useState("1");

  return (
    <div
      onClick={handlerGoShop}
      onMouseEnter={() => {
        setHover("0.8");
      }}
      onMouseLeave={() => {
        setHover("1");
      }}
      style={{
        backgroundImage: props.imgUrl,
        backgroundSize: "cover",
        with: "auto",
        height: "400px",
        opacity: hover,
        cursor: "pointer",
      }}
      className="col"
    />
  );
};

export default ItemsCategory;
