import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import Product from "./Product";
import { baseService } from "../network/services/baseService";
import moment from "moment";
import { Button, Row, Col } from "antd";

const Cart = ({ customerID }) => {
  const { cart, setCart } = useContext(CartContext);

  const deleteCart = () => {
    setCart([]);
  };

  const orderCart = async () => {
    if (cart.length > 0) {
      try {
        const date = moment().format();
        const newOrder = {
          customerId: customerID,
          orderDate: date,
          shipAddress: {
            city: "Ankara",
            country: "Turkey",
          },
          details: [...cart],
        };
        await baseService.post("/orders", newOrder);
        setCart([]);
      } catch (error) {
        console.log("Error", error);
      }
    }
  };
  return (
    <div style={{marginTop: "5%"}}>
      {console.log("cart customerid", customerID)}
      <Button style ={{ margin:"1%", background: "black", borderColor: "black"}}  className="btn" type="primary" onClick ={deleteCart}> Sepeti Boşalt </Button>
      <Button style ={{ margin:"1%", background: "black", borderColor: "black"}} className="btn" type="primary" onClick ={orderCart}> Sipariş Ver </Button>
      <Row>
        {cart.length > 0 ?  cart.map((cartItem, key) => 
          <Col key = {key} xs={24} xl={8} >
            <Product key={key} isInCart = {true} product = {cartItem}/>
          </Col>)
          : <h1 style = {{marginLeft: "1%"}}>Sepetiniz Boş</h1>
       }
      </Row>
    </div>
  );
};

export default Cart;
