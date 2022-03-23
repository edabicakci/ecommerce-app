import { useContext } from 'react'
import CartContext from "../contexts/CartContext"
import Product from './Product'
import {baseService} from "../network/services/baseService"

const Cart = () => {
    const {cart, setCart} = useContext(CartContext)

    const deleteCart = () => {
        setCart([])
    } 

    const orderCart = async() => {
        if(cart){
            const customerID = "SKRHRNO"
            const newOrder = {
                customerId: customerID,
                orderDate: new Date(),
                shipAddress: {
                    "city": "Ankara",
                    "country": "Turkey"
                  },
                details:[...cart]          
                
            }
            await baseService.post("/orders", newOrder)
            setCart([])
        }  
    } 
  return (
    <div style = {{paddingTop:60}}>
        <button onClick={deleteCart}> Sepeti Boşalt</button>
        <button onClick={orderCart}> Sipariş Ver</button>
        {
        cart.length === 0 ? <h1>Sepetiniz Boş</h1> :
        cart.map((cartItem, key)=> <Product key= {key} isInCart = {true} product = {cartItem}></Product> )
        }
    </div>
  )
}

export default Cart