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
    if (cart) {
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
    <>
   
    <Button style ={{ margin:"1%"}} className="btn" type="primary" onClick ={deleteCart}> Sepeti Boşalt </Button>
    <Button style ={{ margin:"1%"}} className="btn" type="primary" onClick ={orderCart}> Sipariş Ver </Button>
    <Row type="flex">
    {cart.length === 0 ? (
        <h1>Sepetiniz Boş</h1>
      ) :  cart.map((cartItem, key) => {
        return <Col xs={24} xl={8} >
            <Product key={key} isInCart = {true} product = {cartItem}/>
        </Col>;
      })}

    </Row>
    </>
  );
};

export default Cart;
