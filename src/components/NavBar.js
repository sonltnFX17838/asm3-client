import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { UserIcon, CartIcon } from "../images/icon/icon";
import sessionUser from "../utils/sessionUser";
import axios from "axios";

const NavBar = () => {
  const session = sessionUser();
  const [activeBtn, setActiveBtn] = useState("home");
  const [hideUserOption, setHideUserOption] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveBtn(pathname);
  }, [pathname]);

  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER}admin-page/log-out`, null, {
        headers: {
          Authorization: session.session,
        },
      })
      .then((response) => {
        if (response.data.success) {
          localStorage.removeItem("session");
          navigate("/home");
          setActiveBtn("/home");
          setHideUserOption(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleGoCart = () => {
    if (session.user) {
      return navigate("/cart");
    } else {
      if (window.confirm("login or sign-up for get detail for your cart")) {
        return navigate("/login/sign-in");
      } else {
        return;
      }
    }
  };
  const handleGoHistory = () => {
    setHideUserOption(false);
    navigate("/history");
  };

  let loginRender = (
    <div className="d-flex">
      <UserIcon />
      <a
        href=""
        className="btn bg-body fw-semibold ps-0"
        style={
          activeBtn.includes("/login")
            ? { color: "#E4A11B" }
            : { color: "#332D2D" }
        }
        onClick={() => navigate("/login/sign-in")}
      >
        Login
      </a>
    </div>
  );

  if (session?.user) {
    loginRender = (
      <div className="d-flex">
        <UserIcon />
        <p
          className="btn bg-body fw-semibold ps-0"
          style={
            activeBtn === "/history" || activeBtn.includes("/view-detail")
              ? { color: "#E4A11B" }
              : { color: "#332D2D" }
          }
          onClick={() => setHideUserOption(!hideUserOption)}
        >
          {session?.user}
        </p>
        {hideUserOption && (
          <div
            className="d-flex flex-column border bg-white rounded"
            style={{ top: "60px", right: "20px", position: "fixed" }}
          >
            <a
              href=""
              className="btn bg-body fw-semibold ps-0 "
              onClick={handleGoHistory}
            >
              History
            </a>

            <a
              href=""
              className="btn bg-body fw-semibold"
              onClick={handleLogout}
            >
              ( Logout )
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex list-unstyled p-3 justify-content-between">
        <div>
          <button
            className="btn bg-body fw-semibold"
            style={
              activeBtn === "/home" || activeBtn === ""
                ? { color: "#E4A11B" }
                : { color: "#332D2D" }
            }
            onClick={() => navigate("/home")}
          >
            Home
          </button>

          <button
            className="btn bg-body fw-semibold"
            style={
              activeBtn === "/shop" || activeBtn.includes("/details")
                ? { color: "#E4A11B" }
                : { color: "#332D2D" }
            }
            onClick={() => navigate("/shop")}
          >
            Shop
          </button>
        </div>
        <div>
          <p className="align-self-end fs-4">BOUTIQUE</p>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <CartIcon />
            <div>
              <a
                href=""
                className="btn bg-body fw-semibold ps-0"
                style={
                  activeBtn === "/cart"
                    ? { color: "#E4A11B" }
                    : { color: "#332D2D" }
                }
                onClick={handleGoCart}
              >
                Cart
              </a>
            </div>
          </div>
          {loginRender}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
