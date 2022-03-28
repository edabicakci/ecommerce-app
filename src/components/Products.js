import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Product from './Product'
import {Row, Col} from "antd"

const Products = ({getProducts}) => {
const {categoryId} = useParams();
const [productsWithCategoryId, setProductsWithCategoryId] = useState([])


useEffect(() => {
  getProductsByCategoryId(categoryId)
}, [categoryId])


const getProductsByCategoryId = async (categoryId) => {
  //categoryId is string, convert to number
  const products = await getProducts()
  const data = products.filter((product) => product.categoryId === +categoryId);
  setProductsWithCategoryId([...data])
}

  return (
    <Row style = {{marginTop: "5%"}}>
      {productsWithCategoryId && productsWithCategoryId.map((product,key) =>
        <Col key = {key} xs={24} xl={8} >
          <Product key={key} isInCart = {false} product = {product}/>
      </Col>)}
    </Row>
  );
};

export default Products