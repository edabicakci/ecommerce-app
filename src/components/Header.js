import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const showCartComponent = () => {
    navigate("/mycart");
  };

  return (
    <div className="is-sticky">
      <img
        onClick={showCartComponent}
        src="./images/cart.jpg"
        alt="Sepetim"
      />
    </div>
  );
};
export default Header;
