import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Card } from 'antd';

const Product = (props) => {
  let { product, isInCart } = props;
  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);

  const showProductDetail = () => {
    navigate(`/${product.id}/detail`);
  };
  const addCart = () => {
    if (!cart.some((cartItem) => cartItem.id === product.id)) {
      product = { ...product, "count": 1 };
      setCart([...cart, product]);
    } else {
      let cartItem = cart.find((cartItem) => cartItem.id === product.id);
      cartItem.count += 1;
      setCart([...cart]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart([...updatedCart]);
  };

  return (
    <Card
    hoverable
    style={{ width: 300, margin: 20}}
    cover={<div style={{ overflow: "hidden", height: "100px" , width: "100px"}}>
    <img
      alt="example"
      style={{ height: "100%" }}
      src="https://image.shutterstock.com/image-vector/vector-illustration-9-archive-icons-600w-1162701376.jpg"
    />
  </div>}
    onClick = {showProductDetail}>
      <> 
    <p>{product.name}</p>
        <p>Unit Price: {product.unitPrice}</p>
        <p>Stock: {product.unitsInStock}</p>
        {isInCart ?
        <> 
        <p> Piece: {product.count} </p> 
        <p> Total Price: {(product.count * product.unitPrice).toFixed(2)} TL</p> 
        </>
         : null}

      <div>
        {isInCart ? 
          (<button onClick={() => removeFromCart(product.id)}> Sepetten Sil</button>) 
          : ( <button onClick={addCart}> Sepete Ekle</button>)
        }
      </div>
      </>
  </Card> 
  );
};

export default Product;
