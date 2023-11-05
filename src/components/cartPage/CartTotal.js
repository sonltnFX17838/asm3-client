import formatCurrency from "../../utils/formatCurrent";

const CartTotail = ({ totalPrice }) => {
  return (
    <div className="col-4 p-4  bg-light">
      <h2 className="py-3">CART TOTAL</h2>
      <div className="d-flex justify-content-between border-bottom">
        <h5>SUBTOTAL</h5>
        <p className="fs-5">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="d-flex justify-content-between py-3">
        <h5>TOTAL</h5>
        <p className="fs-5">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="border  border-dark-subtle">
        <input
          type="text"
          placeholder="Enter your coupon"
          className="w-100 p-1 border border-0"
        />
        <button className=" bg-dark text-white w-100 py-1">Apply coupon</button>
      </div>
    </div>
  );
};

export default CartTotail;
