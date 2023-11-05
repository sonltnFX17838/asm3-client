import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./components/homepage/HomePage";
import DetailPage from "./components/detailPage/DetailPage";
import ShopPage from "./components/shopPage/ShopPage";
import CartPage from "./components/cartPage/CartPage";
import LoginPage from "./components/loginPage/LoginPage";
import CheckOutPage from "./components/checkOutPage/CheckOutPage";
import LiveChat from "./components/liveChat/LiveChat";
import History from "./components/history/History";
import ViewDetail from "./components/history/ViewDetail";
import Login from "./components/auth/Login";

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <NavBar />
      <LiveChat />
      <Routes>
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:detailId" element={<DetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route element={<Login />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/view-detail/:idDetail" element={<ViewDetail />} />
        </Route>
        <Route path="/login/:sign" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
