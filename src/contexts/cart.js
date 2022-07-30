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
   getItemsFromCart()
  }
  const addToCart = async (product) => {
    cartServices.post(product)
    getItemsFromCart()
  }
  const deleteAll = async () =>{
      const product = await cartServices.deleteAll();
     getItemsFromCart();
  }
  React.useEffect(() => {
    getItemsFromCart()
  }, [])



  return <CartContext.Provider value={{ cart,addToCart,deleteAll,getItemsFromCart,deleteProduct }}>{children}</CartContext.Provider>
}
