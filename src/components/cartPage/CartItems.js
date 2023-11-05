import axios from "axios";
import { DownIcon, UpIcon, TrashIcon } from "../../images/icon/icon";
import formatCurrency from "../../utils/formatCurrent";

const CartItems = ({ cartItems, getOrder, orderId, session }) => {
  const handleUpdateItem = (productId, turn) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER}update-detail/${productId}`,
        {
          orderId: orderId,
          turn: turn,
        },
        {
          headers: {
            Authorization: session.session,
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          getOrder();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteItem = (productId) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER}delete-detail/${productId}`, {
        headers: {
          Authorization: session.session,
        },
      })
      .then((response) => {
        if (response.data.success) {
          getOrder();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateQuantity = (productId, turn, total) => {
    if (total < 1) {
      return alert("total is not enought");
    }
    handleUpdateItem(productId, turn);
  };

  return (
    <table className="table">
      <thead>
        <tr className="bg-light text-center">
          <th>IMAGE</th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANLITY</th>
          <th>TOTAL</th>
          <th>REMOVE</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="align-middle">
              <img
                src={item.product.img1}
                style={{ width: "120px" }}
                alt="..."
              />
            </td>
            <td className="w-25 align-middle">
              <h4>{item.product.name}</h4>
            </td>
            <td className="align-middle fs-5">
              {formatCurrency(item.product.price)}
            </td>
            <td className="align-middle fs-5">
              <div className="d-flex">
                <button
                  className="m-auto bg-white border-0"
                  onClick={() =>
                    item.quantity > 0
                      ? handleUpdateQuantity(
                          item.product._id,
                          "down",
                          item.total
                        )
                      : ""
                  }
                >
                  <DownIcon />
                </button>

                <p className="mx-2 my-auto">{item.quantity}</p>
                <button
                  className="m-auto bg-white border-0"
                  onClick={() =>
                    handleUpdateQuantity(item.product._id, "up", item.total)
                  }
                >
                  <UpIcon />
                </button>
              </div>
            </td>
            <td className="align-middle fs-5">
              {formatCurrency(item.product.price * item.quantity)}
            </td>
            <td className="align-middle">
              <div
                onClick={() => handleDeleteItem(item.product._id)}
                style={{ cursor: "pointer" }}
              >
                <TrashIcon />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartItems;
