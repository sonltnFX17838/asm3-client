import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sessionUser from "../../utils/sessionUser";
// import openSocket from "socket.io-client";

const styleP = {
  display: "block",
  width: "120px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const History = () => {
  const session = sessionUser();
  const navigate = useNavigate();
  const [historyOrder, setHistoryOrder] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}get-history`, {
        headers: {
          Authorization: session.session,
        },
      })
      .then((response) => setHistoryOrder(response.data.orders))
      .catch((err) => console.log(err));
    // openSocket("http://localhost:5000");
  }, [session.session]);
  return (
    <React.Fragment>
      <div className=" mb-5 bg-light p-5 d-flex justify-content-between align-items-center ">
        <h1 className="fw-simebold px-5">HISTORY</h1>
        <div className="fw-light px-5 d-flex align-items-center">
          <p className="fw-bold fs-5 align-items-end">
            <span className=" text-muted  fw-bold fs-5">HISTORY</span>
          </p>
        </div>
      </div>
      <table
        className="table "
        style={{ marginBottom: "150px", minHeight: "calc(100vh - 674px)" }}
      >
        <thead>
          <tr className="bg-light text-center">
            <th className="col-1">
              <span>ID ORDER</span>
            </th>
            <th>
              <span>ID USER</span>
            </th>
            <th>NAME</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>TOTAL</th>
            <th>DELIVERY</th>
            <th>STATUS</th>
            <th>DETAIL</th>
          </tr>
        </thead>
        <tbody>
          {historyOrder &&
            historyOrder.map((order, index) => (
              <tr className="text-center border-bottom" key={index}>
                <td>
                  <p style={styleP}>{order._id}</p>
                </td>
                <td>
                  <p style={styleP}>{order.user._id}</p>
                </td>
                <td>{order.user.fullName}</td>
                <td>{order.user.phoneNumber}</td>
                <td>{order.address}</td>
                <td>{order.cart.totalPrice}</td>
                <td>
                  {order.isCompleted ? "shipping" : "waiting for progressing"}
                </td>
                <td>
                  {order.isCompleted
                    ? "waiting for pay"
                    : "waiting order-confirm"}
                </td>
                <td>
                  <p
                    className="border btn"
                    onClick={() => navigate(`/view-detail/${order._id}`)}
                  >
                    View
                  </p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default History;
