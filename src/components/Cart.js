import { useContext } from 'react'
import CartContext from "../contexts/CartContext"
import Product from './Product'

const Cart = () => {
    const {cart, setCart} = useContext(CartContext)

    const deleteCart = () => {
        setCart([])
    } 
  return (
    <div style = {{paddingTop:60}}>
        <button onClick={deleteCart}> Sepeti Boşalt</button>
        {
        cart.length === 0 ? <h1>Sepetiniz Boş</h1> :
        cart.map((cartItem, key)=> <Product key= {key} isInCart = {true} product = {cartItem}></Product> )
        }
    </div>
  )
}

export default Cart