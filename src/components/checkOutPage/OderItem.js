import formatCurrency from "../../utils/formatCurrent";

const OderItem = ({ detail }) => {
  return (
    <div className="d-flex justify-content-between border-bottom">
      <h6>{detail.product.name}</h6>
      <p className="fs-6">
        {formatCurrency(detail.product.price)} X {detail.quantity}
      </p>
    </div>
  );
};

export default OderItem;
