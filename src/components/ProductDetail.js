import React from "react";
import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import  CartContext  from "../contexts/CartContext";
import { baseService } from "../network/services/baseService";
import { Card, Button } from "antd"

const ProductDetail = () => {
  const {cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState({})
  const {productId} = useParams()

  useEffect(() => {
    getProduct()
  }, [])
  

  const getProduct = async() => {
    try{
      const data = await baseService.get(`/products/${productId}`)
      setProduct(data)
    }catch(error){
      console.log("Error", error);
    }
  }

  const addCart = () => {
    if (!cart.some((cartItem) => cartItem.id === product.id)) {
      const cartProduct = { ...product, "count": 1 };
      setCart([...cart, cartProduct])
    } else {
      let cartItem = cart.find((cartItem) => cartItem.id === product.id)
      cartItem.count += 1;
      setCart([...cart])
    }
  };

  return (
    <Card
      hoverable
      className="product"
      cover={
        <div className="cover">
          <img
            alt="example"
            style = {{width: "100%"}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Aiga_restaurant_inv.svg/1021px-Aiga_restaurant_inv.svg.png"
          />
          </div>} 
          actions ={[<Button className="btn" type="primary" onClick={addCart}> Sepete Ekle </Button>]}>
            <h1>{product.name}</h1>
            <p> Unit Price: {product.unitPrice}</p>
            <p> Stock: {product.unitsInStock}</p>
            <p> Quantity per Unit: {product.quantityPerUnit}</p>
            <p>
              Supplier Information: {product.supplier ?( product.supplier?.companyName)
              : "-"}
            </p>
    </Card>
    
  );
};

export default ProductDetail;
