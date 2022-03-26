import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Product from './Product'

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
    <div>
         <h1 className='h1'> Products </h1>
        { productsWithCategoryId && productsWithCategoryId.map((product, key) => <Product key={key} isInCart = {false} product = {product}/>)}
    </div>
  )
}

export default Products