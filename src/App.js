import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { baseService } from "./network/services/baseService";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import NotFoundPage from "./components/NotFoundPage"; 
import CartContext from "./contexts/CartContext";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import { HomeOutlined, ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';

function App() {
  const { Header, Content, Footer } = Layout;
  const [totalCartCount, setTotalCartCount] = useState(0)
  const [customerID, setCustomerID] = useState("")
  const { cart } = useContext(CartContext);

  useEffect(() => {
    generateCustomerId(5)
  }, [])
  

  useEffect(() => {
   showCartCount()
  }, [cart])
  

  const getProducts = async () => {
    try {
      const data = await baseService.get("/products");
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  const showCartCount = () => {
    let count = 0; 
    cart.map(cartItem => count += cartItem.count )
    setTotalCartCount(count);
  }

  const generateCustomerId = (length) =>  {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   setCustomerID("aaa"+ result)
   console.log("customerID", customerID);
  }
  
  return (
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to={'/'}>Home</Link> <HomeOutlined /> </Menu.Item>
                        <Menu.Item key="2"><Link to='/myCart'>Cart</Link> <ShoppingCartOutlined /> {totalCartCount }</Menu.Item>
                        <Menu.Item key="3"><Link to='/myOrders'>Orders</Link> <UnorderedListOutlined /> </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <Routes>
                        <Route exact path="/" element={ <HomePage getProducts={getProducts} />} />
                        <Route path="/:categoryId/products" element={<Products getProducts={getProducts} />} />
                        <Route path="/:productId/detail" element={<ProductDetail />} />
                        <Route path="/myCart" element={ <Cart customerID = {customerID}/>} />
                        <Route path="/myOrders" element={ <Orders custId = {customerID}/>} />
                        <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                     E-Commerce App ©2022 
                </Footer>
            </Layout>
  );
}

export default App;
