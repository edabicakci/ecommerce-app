import React from "react";
import Categories from "./Categories";
import Product from "./Product";
import { useState, useEffect } from "react";

const HomePage = ({ products }) => {
  const [firstTenProduct, setFirstTenProduct] = useState([]);
  
  useEffect(() => {
    listTenProducts();
  },[]);

  const listTenProducts = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data[i] = products[i];
    }
    setFirstTenProduct([...data]);
  };

  return (
    <>
      <h1 className="h1"> Welcome </h1>
      <Categories />

      {firstTenProduct.length && firstTenProduct.map((product, key) => (
          <Product key={key} product={product} />
        ))}
    </>
  );
};

export default HomePage;
