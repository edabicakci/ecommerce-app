import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const showCartComponent = () => {
    navigate("/myCart");
  };

  const showOrderComponent = () => {
    navigate("/myOrders");
  };

  return (
    <div className="is-sticky">
      <img onClick={showCartComponent} src="./images/cart.jpg" alt="Sepetim" />
      <img onClick={showOrderComponent} src="./images/order.jpg" alt="Siparişlerim" />
    </div>
  );
};
export default Header;
