import React from 'react'
import { useState, useEffect } from 'react'
import { baseService } from '../network/services/baseService'
import Category from './Category'
import  "./styles.css";

const Categories = () => {
    const [categories, setCategories] = useState([])

    const getData = async() => {
        setCategories(await baseService.get("/categories"))
    }

    useEffect(() => {
      getData()
    }, [])
    

  return (
    <div className="float-container">
        {categories.map((category, key) =>  <Category key = {key} category = {category}/>)}
    </div>
  )
}

export default Categories