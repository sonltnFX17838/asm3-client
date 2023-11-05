import OderItem from "./OderItem";
import formatCurrency from "../../utils/formatCurrent";

const OderDetail = ({ order }) => {
  return (
    <div className="col-5 p-4  bg-light">
      <h2 className="py-3">CART TOTAL</h2>
      {order.cart.items.map((detail, index) => (
        <OderItem key={index} detail={detail} />
      ))}
      <div className="d-flex justify-content-between pt-3">
        <h5>TOTAL</h5>
        <p className="fs-5">{formatCurrency(order.cart.totalPrice)}</p>
      </div>
    </div>
  );
};

export default OderDetail;
