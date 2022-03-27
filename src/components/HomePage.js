import React from "react";
import Categories from "./Categories";
import Product from "./Product";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";

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
      <Col span={12}>
        <h1 style={{ marginLeft: "5%", marginTop: "10%" }}> Categories </h1>
        <Categories />
      </Col>
      <Col span={12}>
        <h1 style={{ marginLeft: "5%", marginTop: "10%" }}> Top Products</h1>
        <Row style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          {firstTenProduct.length && firstTenProduct.map((product, key) => 
          <Col xs={24} xl={8} style={{ paddingTop: "1%", paddingBottom: "1%" }}>
            <Product isInHomePage = {true} key={key} product={product} />
          </Col> )}
        </Row>
      </Col>
    </Row>
  );
};

export default HomePage;
