import React from "react";
import Categories from "./Categories";
import Product from "./Product";
import { useState, useEffect } from "react";
import { Row, Col } from 'antd';

const HomePage = ({ getProducts }) => {
  const [firstTenProduct, setFirstTenProduct] = useState([]);

  useEffect(() => {
    listTenProducts();
  }, []);

  const listTenProducts = async () => {
    const products = await getProducts();
    const data = [];
    for (let i = 0; i < 10; i++) {
      data[i] = products[i];
    }
    setFirstTenProduct([...data]);
  };

  return (
    <Row>
      <Col span={12}> <h1 style= {{marginLeft:40, marginTop: 20}}> Categories </h1><Categories /> </Col>
      <Col span={12}>
        <div> 
          <h1 style= {{marginLeft:40, marginTop: 20}}> Top Products</h1>
        {firstTenProduct.length &&
          firstTenProduct.map((product, key) => (
            <Product key={key} product={product} />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default HomePage;
