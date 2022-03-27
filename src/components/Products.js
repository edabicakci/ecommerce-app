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
    <Row type="flex" gutter={16}>
    { productsWithCategoryId && productsWithCategoryId.map((product,key) =>{
      return <Col span={12}  style={{paddingTop: '8px', paddingBottom: '8px'}}>
          <Product key={key} isInCart = {false} product = {product}/>
      </Col>;
    })}
  </Row>
  )
}

export default Products