import React from 'react'
import cartServices from '../services/cart';
export const CartContext = React.createContext();

export const CartStore = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const getItemsFromCart = async () => {
    const productsCart = await cartServices.get();
    setCart(productsCart);
  }

  const deleteProduct = async(id) => {
   const product =  await cartServices.delete(id)
   const filter = cart.filter((item)=> item == product.product)
   setCart(filter)
  }
  const addToCart = async (product) => {
    cartServices.post(product)
    getItemsFromCart()
    getItemsFromCart()
  }
  React.useEffect(() => {
    getItemsFromCart()
  }, [])



  return <CartContext.Provider value={{ cart, addToCart, getItemsFromCart,deleteProduct }}>{children}</CartContext.Provider>
}
