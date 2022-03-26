import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import Product from "./Product";
import { baseService } from "../network/services/baseService";
import moment from "moment";

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
    <div style={{ paddingTop: 60 }}>
      <button onClick={deleteCart}> Sepeti Boşalt</button>
      <button onClick={orderCart}> Sipariş Ver</button>
      {cart.length === 0 ? (
        <h1>Sepetiniz Boş</h1>
      ) : (
        cart.map((cartItem, key) => (
          <Product key={key} isInCart={true} product={cartItem}></Product>
        ))
      )}
    </div>
  );
};

export default Cart;
