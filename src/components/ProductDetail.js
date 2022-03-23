import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import  CartContext  from "../contexts/CartContext";

const ProductDetail = () => {
  const { state } = useLocation();
  let { product } = state;
  const {cart, setCart } = useContext(CartContext);

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
    
    <div className="productDetail">
      <h1>{product.name}</h1>
      <p> Unit Price: {product.unitPrice}</p>
      <p> Stock: {product.unitsInStock}</p>
      <p> Quantity per Unit: {product.quantityPerUnit}</p>
      <p>
        Supplier Information: {product.supplier?.companyName}{" "}
        {product.supplier?.contactName} {product.supplier?.address?.phone}{" "}
      </p>
      <button onClick={addCart}> Sepete Ekle</button>
    </div>
  );
};

export default ProductDetail;
