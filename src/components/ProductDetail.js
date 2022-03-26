import React from "react";
import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import  CartContext  from "../contexts/CartContext";
import { baseService } from "../network/services/baseService";

const ProductDetail = () => {
  const {cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState({})
  const {id} = useParams()

  useEffect(() => {
    getProduct()
  }, [])
  

  const getProduct = async() => {
    try{
      const data = await baseService.get(`/products/${id}`)
      setProduct(data)
    }catch(error){
      console.log("Error", error);
    }
  }

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
