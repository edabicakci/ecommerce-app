import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseService } from "./network/services/baseService";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import {CartProvider} from "./contexts/CartContext"

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   getProducts()
  }, [])
  

  const getProducts = async () => {
    try {
      const data = await baseService.get("/products");
      setProducts([...data])
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
     <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={ products.length && <HomePage products={products} />} />
          <Route path="/:categoryId/products" element={ products.length && <Products products={products} />} />
          <Route path="/:productId/detail" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider> 
    </>
   
   
  );
}

export default App;
