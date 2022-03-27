import React from 'react'
import { useState, useEffect } from 'react'
import { baseService } from '../network/services/baseService'
import Category from './Category'
import  "./styles.css";
import {Row, Col} from "antd"

const Categories = () => {
    const [categories, setCategories] = useState([])

    const getData = async() => {
        setCategories(await baseService.get("/categories"))
    }

    useEffect(() => {
      getData()
    }, [])
    

  return (
    <Row type="flex" style={{paddingLeft: '5%', paddingRight: '5%'}}>
    {categories.map((category,key) =>{
      return <Col xs={24} xl={8} style={{paddingTop: '5%', paddingBottom: '5%'}}>
          <Category key = {key} category = {category}/>
      </Col>;
    })}
  </Row>

  )
}

export default Categories