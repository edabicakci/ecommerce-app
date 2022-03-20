import {Routes,Route,  BrowserRouter as Router,} from "react-router-dom";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";


function App() {
  return (
    <Router>
     <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/:categoryId/productList" element = {<Products/>} />
        <Route path="/:productId/detail" element = {<ProductDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
