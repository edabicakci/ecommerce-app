import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Card, Button, Modal } from 'antd';

const Product = (props) => {
  const { product, isInCart, isInHomePage } = props;
  const [isModalVisible, setIsModalVisible] = useState(false)
  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);

  const showProductDetail = () => {
    navigate(`/${product.id}/detail`);
  };
  const addCart = () => {
    if (product.unitsInStock !== 0 ){
      if (!cart.some((cartItem) => cartItem.id === product.id)) {
        const cartProduct = { ...product, "count": 1 };
        setCart([...cart, cartProduct]);
      } else {
        let cartItem = cart.find((cartItem) => cartItem.id === product.id);
        cartItem.count += 1;
        setCart([...cart]);
      }
    }else{
      setIsModalVisible(true);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart([...updatedCart]);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card
        key = "key0"
        hoverable
        className={isInHomePage? "productInHomePage" : "product"}
        cover={
        <div key = "key1" className={isInHomePage? "coverInHomePage" : "cover"}>
          <img
            key = "key2"
            alt="example"
            style = {{width: "100%"}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Aiga_restaurant_inv.svg/1021px-Aiga_restaurant_inv.svg.png"
            onClick = {showProductDetail}/>
        </div>}>
        
        <div key = "key3" onClick = {showProductDetail}  > 
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

        <div key = "key4">
          {isInCart ? [<Button key = "key5" style= {{background: "black", borderColor: "black", position: "absolute", bottom: "0"}} className="btn" type="primary" onClick={() => removeFromCart(product.id)} > Sepetten Sil </Button>] 
          : [<Button key = "key6" style= {{background: "black", borderColor: "black", position: "absolute", bottom: "0"}} className="btn" type="primary" onClick={addCart}> Sepete Ekle </Button>]}
        </div>
      </Card>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>??r??n stoklarda kalmam????t??r!</p>
      </Modal>
    </>
  );
};

export default Product;
