import { useNavigate } from "react-router-dom";

import banner1 from "../../../images/banner1.jpg";

const Banner = () => {
  const navigate = useNavigate();
  const handlerGoShop = () => {
    navigate("/shop");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${banner1})`,
        backgroundSize: "cover",
        with: "auto",
        height: "500px",
      }}
      className="ps-5 d-flex mb-5"
    >
      <div className="my-auto ps-5 d-block w-25 lh-1">
        <p className="fw-light">NEW INSPIRATION 2020</p>
        <span className="fs-2">20% OFF ON NEW SEASON</span>
        <p>
          <button
            className="bg-dark text-white px-4 py-1 my-2 fs-5 fw-light"
            onClick={handlerGoShop}
          >
            Browse collections
          </button>
        </p>
      </div>
    </div>
  );
};

export default Banner;
