import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { baseService } from '../network/services/baseService'
import Product from './Product'

const Products = () => {
const {categoryId} = useParams();
const [products, setProducts] = useState([])

useEffect(() => {
  getProducts(categoryId)
}, [categoryId])


const getProducts = async (categoryId) =>{
    //categoryId is string, convert to number
    // try catch yap 
    o
    const allProducts = await baseService.get("/products")
    const productsWithCategoryId = allProducts.filter(product => product.categoryId === +categoryId)
    setProducts([...productsWithCategoryId])   
 }

  return (
    <div>
         <h1 className='h1'> Products </h1>
        { products && products.map((product, key) => <Product key={key} product = {product}/>)}
    </div>
  )
}

export default Products