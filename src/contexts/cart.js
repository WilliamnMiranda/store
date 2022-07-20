import React from 'react'
import cartServices from '../services/cart';
export const CartContext = React.createContext();

export const CartStore = ({children}) => {
  const [cart,setCart] = React.useState([]);

  const addToCart = async (product) => {
    cartServices.post(product)
  }

  const getItemsFromCart = async () => {
    const productsCart = await cartServices.get();
    setCart(productsCart);
  }

  React.useEffect(()=>{
      getItemsFromCart()
  },[])

  return <CartContext.Provider value={{cart,addToCart,getItemsFromCart}}>{children}</CartContext.Provider>
}
