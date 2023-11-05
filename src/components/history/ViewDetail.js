import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrent";
import sessionUser from "../../utils/sessionUser";
// import openSocket from "socket.io-client";

const ViewDetail = () => {
  const session = sessionUser();
  const { idDetail } = useParams();
  const [detail, setDetail] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}view-detail/${idDetail}`, {
        headers: {
          Authorization: session.session,
        },
      })
      .then((response) => setDetail(response.data.detail))
      .catch((err) => console.log(err));

    // openSocket("http://localhost:5000");
  }, [idDetail, session.session]);

  return (
    <div className="mx-5">
      {detail && (
        <div>
          <h1>INFORMATION ORDER</h1>
          <p>ID User: {detail.user._id}</p>
          <p>Full Name: {detail.user.fullName}</p>
          <p>Phone: {detail.user.phoneNumber}</p>
          <p>Address: {detail.address}</p>
          <p>Total: {formatCurrency(detail.cart.totalPrice)}</p>
        </div>
      )}
      <table className="table">
        <thead>
          <tr className="bg-light text-center">
            <th>ID PRODUCT</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COUNT</th>
          </tr>
        </thead>
        <tbody>
          {detail &&
            detail.cart.items.map((product, index) => (
              <tr className="text-center" key={index}>
                <td className="w-25 align-middle">{detail._id}</td>
                <td className="align-middle">
                  <img
                    src={product.product.img1}
                    style={{ width: "160px" }}
                    alt="..."
                  />
                </td>
                <td className="align-middle fs-5">{product.product.name}</td>
                <td className="align-middle fs-5">
                  {formatCurrency(product.product.price)}
                </td>
                <td className="align-middle fs-5">{product.quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDetail;
