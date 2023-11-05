import React from "react";

const Category = ({ searchHandle, item }) => {
  return (
    <div className="col-3">
      <h2 className="ps-2">CATEGORIES</h2>
      <span className="bg-dark fs-4 text-white ps-5 w-100 d-block">APPLE</span>
      <div className="d-flex flex-column ps-5 align-items-start">
        <button
          onClick={() => searchHandle("all")}
          style={item === "all" ? { color: "red" } : {}}
          className="btn fs-4"
        >
          All
        </button>
        <p className="fs-4 fw-bold">IPHONE & MAC</p>
        <button
          onClick={() => searchHandle("iphone")}
          style={item === "iphone" ? { color: "red" } : {}}
          className="btn fs-4"
        >
          Iphone
        </button>
        <button
          onClick={() => searchHandle("ipad")}
          style={item === "ipad" ? { color: "red" } : {}}
          className="btn fs-4"
        >
          Ipad
        </button>
        <button
          onClick={() => searchHandle("macbook")}
          style={item === "macbook" ? { color: "red" } : {}}
          className="btn fs-4"
        >
          Macbook
        </button>
        <p className="fs-4 fw-bold">WRIDELESS</p>
        <button
          onClick={() => searchHandle("airpod")}
          style={item === "airpod" ? { color: "red" } : {}}
          className="btn fs-4"
        >
          Airpod
        </button>
        <button
          onClick={() => searchHandle("watch")}
          style={item === "watch" ? { color: "red" } : {}}
          className="btn fs-4"
        >
          Watch
        </button>
        <p className="fs-4 fw-bold">OTHER</p>
        <button
          onClick={() => searchHandle("mouse")}
          style={item === "mouse" ? { color: "red" } : {}}
          className="btn fs-4"
        >
          Mouse
        </button>
        <button
          onClick={() => searchHandle("keyboard")}
          style={item === "keyboard" ? { color: "red" } : {}}
          className="btn fs-4"
        >
          Keyboard
        </button>
        <button
          onClick={() => searchHandle("oder")}
          style={item === "oder" ? { color: "red" } : {}}
          className="btn fs-4"
        >
          Oder
        </button>
      </div>
    </div>
  );
};

export default Category;
