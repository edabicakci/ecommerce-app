import React from "react";
import Categories from "./Categories";
import Product from "./Product";
import { useState, useEffect } from "react";

const HomePage = ({ getProducts }) => {
  const [firstTenProduct, setFirstTenProduct] = useState([]);

  useEffect(() => {
    listTenProducts();
  }, []);

  const listTenProducts = async () => {
    const products = await getProducts()
    const data = [];
    for (let i = 0; i < 10; i++) {
      data[i] = products[i];
    }
    setFirstTenProduct([...data]);
  };

  return (
    <div className="float-container">
      <div className="float-child">  <Categories /></div>
      
      <div className = "float-child">
        {firstTenProduct.length &&
          firstTenProduct.map((product, key) => (
            <Product key={key} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
