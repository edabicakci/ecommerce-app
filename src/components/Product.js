import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Product = (props) => {
  let { product } = props;
  const navigate = useNavigate();

  const [ cart, setCart ] = useContext(CartContext);

  const showProductDetail = () => {
    navigate(`/${product.id}/detail`, { state: { product } });
  };
  const addCart = () => {
    if (!cart.some((cartItem) => cartItem.id === product.id)) {
      product = { ...product, "count": 1 };
      setCart([...cart, product])
    } else {
      let cartItem = cart.find((cartItem) => cartItem.id === product.id)
      cartItem.count += 1;
      setCart([...cart])
    }
  };

  return (
    <div className="product" onClick={showProductDetail}>
      <>
        <p>{product.name}</p>
        <p>Unit Price: {product.unitPrice}</p>
        <p>Stock: {product.unitsInStock}</p>
        <button onClick={addCart}> Sepete Ekle</button>
      </>
    </div>
  );
};

export default Product;
