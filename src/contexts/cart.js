import React from 'react'
import cartServices from '../services/cart';
export const CartContext = React.createContext();

export const CartStore = ({children}) => {
  const [cart,setCart] = React.useState([]);

  const getItemsFromCart = React.useCallback(async () => {
    const productsCart = await cartServices.get();
    setCart(productsCart);
  },[cart])

  const addToCart = async (product) => {
    cartServices.post(product)
    getItemsFromCart()
    console.log(cart.length)
  }

  React.useEffect(()=>{
      getItemsFromCart()
  },[])

  return <CartContext.Provider value={{cart,addToCart,getItemsFromCart}}>{children}</CartContext.Provider>
}
