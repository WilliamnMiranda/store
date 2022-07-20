import React from 'react'
import { CartContext } from '../../contexts/cart'
const Cart = () => {
  const { cart }  = React.useContext(CartContext);
  console.log(cart)
  return (
    <div>cart</div>
  )
}

export default Cart