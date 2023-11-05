import React, { useEffect, useState } from "react";

import { NextIcon, PrevIcon } from "../../images/icon/icon";
import ShopItems from "./ShopItems";
import Category from "./Category";
import axios from "axios";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [item, setItem] = useState("all");

  useEffect(() => {
    if (searchText !== "") {
      axios
        .get(`${process.env.REACT_APP_SERVER}search-product/${searchText}`)
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`${process.env.REACT_APP_SERVER}products`)
        .then((response) => {
          setProducts(response.data.products);
          setItem("all");
        })
        .catch((err) => console.log(err));
    }
  }, [searchText]);

  const searchFnt = (search) => {
    setItem(search);
    setSearchText(search === "all" ? "" : search);
  };

  return (
    <React.Fragment>
      <div className=" mb-5 bg-light p-5 d-flex justify-content-between align-items-center">
        <h1 className="fw-simebold px-5">SHOP</h1>
        <p className="fw-light px-5">SHOP</p>
      </div>
      <div className="row">
        <Category searchHandle={searchFnt} item={item} />

        <div className="col-9 ">
          <div className="d-flex justify-content-between px-4">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Enter Search Here!"
            />
            <select className="align-center d-block w-25 h-50">
              <option>Default shotting!</option>
              <option>Some else</option>
            </select>
          </div>
          <div className="row">
            {products.map((dt) => (
              <ShopItems product={dt} key={dt._id} />
            ))}
          </div>
          <div className=" text-end my-4">
            <div className="d-flex justify-content-end pe-5 align-items-center">
              <div className="px-2 mx-1">
                <button style={{ border: "none", background: "none" }}>
                  <PrevIcon />
                </button>
              </div>
              <div className=" px-2 mx-1 text-white bg-dark">
                <p className=" fw-semibold m-auto" href="">
                  {products.length !== 0 ? 1 : 0}
                </p>
              </div>
              <div className=" px-2 mx-1">
                <button style={{ border: "none", background: "none" }}>
                  <NextIcon />
                </button>
              </div>
            </div>
            <p className="fw-light fs-3 pe-5 mt-3 ">
              {products.length !== 0
                ? `Showing 1/1 of ${products.length} results`
                : "no product found"}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopPage;
