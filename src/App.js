import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart ]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/:categoryId/products" element={<Products />} />
          <Route path="/:productId/detail" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
