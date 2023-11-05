import { useNavigate } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrent";

const RelatedProduct = ({ products }) => {
  const navigate = useNavigate();
  return (
    <div className="row p-4">
      {products.map((dt) => (
        <div
          key={dt._id}
          className="col-4"
          onClick={() => navigate(`/details/${dt._id}`)}
          style={{ cursor: "pointer" }}
        >
          <img src={dt.img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className=" fs-5">{dt.name}</span>
            <p className="card-text fw-light">{formatCurrency(dt.price)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedProduct;
