import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  const handeClick = () => {
    navigate(`/${product.id}/detail`, {state:{product}} )
  };

  return (
    <div className="product" onClick={handeClick}>
       <>
          <p>{product.name}</p>
          <p>Unit Price: {product.unitPrice}</p>
          <p>Stock: {product.unitsInStock}</p>
          <button> Sepete Ekle</button>
        </>
  
    </div>
  );
};

export default Product;
