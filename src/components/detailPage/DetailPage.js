import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import RelatedProduct from "./RelatedProduct";
import ItemDetail from "./ItemDetail";
import axios from "axios";
import io from "socket.io-client";
import sessionUser from "../../utils/sessionUser";

const DetailPage = () => {
  const session = sessionUser();
  const socketRef = useRef();
  const { detailId } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  const [relatedDetail, setRelatedDetail] = useState([]);

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:5000");
    socketRef.current.on("updateProduct", (data) => {
      setItemDetail(data);
    });

    axios
      .get(`${process.env.REACT_APP_SERVER}detail/${detailId}`)
      .then((response) => {
        setRelatedDetail(response.data.relatedDetail);
        setItemDetail(response.data.itemDetail);
      })
      .catch((err) => console.log(err));
  }, [detailId]);

  return (
    <div>
      {itemDetail ? (
        <ItemDetail detail={itemDetail} session={session} />
      ) : (
        <h2>loading</h2>
      )}
      {relatedDetail ? (
        <RelatedProduct products={relatedDetail} />
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
};

export default DetailPage;
