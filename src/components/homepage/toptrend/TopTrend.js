import ItemTopTrend from "./ItemTopTrend";
import axios from "axios";
import { useEffect, useState } from "react";
// import io from "socket.io-client";

// const socket = io.connect("http://localhost:5000");
const TopTrend = () => {
  const [products, setProducts] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}products`)
      .then((response) => setProducts(response.data.products))
      .catch((err) => console.log(err));

    // socket.on("products", (products) => {
    //   console.log(products);
    // });
  }, []);

  return (
    <div className="mx-3">
      <div className="my-4 lh-1 align-bottom">
        <p className="fw-light fs-5">MADE THE HARD WAY</p>
        <span className="fs-3">TOP TRENDING PRODUCTS</span>
      </div>
      <div className="row">
        {products ? (
          products.map((dt) => <ItemTopTrend product={dt} key={dt._id} />)
        ) : (
          <h1 className="text-center">loading</h1>
        )}
      </div>
    </div>
  );
};

export default TopTrend;
