import React from "react";
import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import  CartContext  from "../contexts/CartContext";
import { baseService } from "../network/services/baseService";
import { Card, Button, Modal } from "antd"

const ProductDetail = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
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


  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <> 
    <Card
      hoverable
      className="productDetail"
      cover={
        <div className="cover">
          <img
            alt="example"
            style = {{width: "100%"}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Aiga_restaurant_inv.svg/1021px-Aiga_restaurant_inv.svg.png"
          />
          </div>} 
          actions ={[<Button style= {{background: "black", borderColor: "black" }} className="btn" type="primary" onClick={addCart}> Sepete Ekle </Button>]}>
            <h1>{product.name}</h1>
            <p> Unit Price: {product.unitPrice}</p>
            <p> Stock: {product.unitsInStock}</p>
            <p> Quantity per Unit: {product.quantityPerUnit}</p>
            <p>
              Supplier Information: {product.supplier ?( product.supplier?.companyName)
              : "-"}
            </p>
            </Card>
              <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>Ürün stoklarda kalmamıştır!</p>
               </Modal>
          </>
    
  );
};

export default ProductDetail;
