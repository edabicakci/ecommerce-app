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
    <Row style={{paddingLeft: '5%', paddingRight: '5%'}}>
      {categories.map((category,key) =>
        <Col key = {key} xs={24} xl={8} style={{paddingTop: '1%', paddingBottom: '1%'}}>
          <Category key = {key} category = {category}/>
        </Col>)}
    </Row>
  );
};

export default Categories