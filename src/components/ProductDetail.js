import React from 'react'
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
    const { state } = useLocation();
    const {product} = state;

  return (
    <div className="productDetail">
        <h1>{product.name}</h1>
        <p> Unit Price: {product.unitPrice}</p>
        <p> Stock: {product.unitsInStock}</p>
        <p> Quantity per Unit: {product.quantityPerUnit}</p>
        <p>Supplier Information: {product.supplier?.companyName} {product.supplier?.contactName} {product.supplier?.address?.phone} </p>  
        <button> Sepete Ekle</button>  
    </div>
  )
}

export default ProductDetail