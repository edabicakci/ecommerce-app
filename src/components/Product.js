import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Card, Button} from 'antd';

const Product = (props) => {
  let { product, isInCart, isInHomePage } = props;
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
    className={isInHomePage? "productInHomePage" : "product"}
    cover={
    <div className={isInHomePage? "imageInHomePage" : "image"}>
      <img
        alt="example"
        style = {{width: "100%"}}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Aiga_restaurant_inv.svg/1021px-Aiga_restaurant_inv.svg.png"
        onClick = {showProductDetail}/>
  </div>}
    actions = {isInCart ? [<Button className="btn" type="primary" onClick={() => removeFromCart(product.id)} > Sepetten Sil </Button>] 
    : [<Button className="btn" type="primary" onClick={addCart}> Sepete Ekle </Button>]}>
      <div onClick = {showProductDetail}> 
        <p>{product.name}</p>
        <p>Unit Price: {product.unitPrice}</p>
        <p>Stock: {product.unitsInStock}</p>
        {isInCart ?
        <> 
        <p> Piece: {product.count} </p> 
        <p> Total Price: {(product.count * product.unitPrice).toFixed(2)} TL</p> 
        </>
         : null}
      </div>
  </Card> 
  );
};

export default Product;
