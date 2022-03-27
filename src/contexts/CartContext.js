import { createContext, useState, useEffect} from "react";

function setLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error", error);
    }
  };


  function getLocalStorage(key, initialValue) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log("Error", error);
      return initialValue;
    }
  }


const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  
  
 
  const [cart, setCart] = useState(()=> getLocalStorage("cart", []));

  useEffect(() => {
   setLocalStorage("cart", cart)
  }, [cart])
  

  const values = { cart, setCart };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
