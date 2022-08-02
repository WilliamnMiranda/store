import React from 'react'
import cartServices from '../services/cart';
export const CartContext = React.createContext();

export const CartStore = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const getItemsFromCart = React.useCallback(async () => {
    const productsCart = await cartServices.get();
    setCart(productsCart);
  },[])

  const deleteProduct = async(id) => {
   cartServices.delete(id)
   getItemsFromCart()
  }
  const addToCart = async (product) => {
    const checkItemCart = cart.some((item)=> item.product._id === product._id)
    if(checkItemCart) return 
    cartServices.post(product)
    getItemsFromCart()
  }
  const updateItem = async (items) => {
    const newProducts = await cartServices.patch(items)
    getItemsFromCart()
  }
  const deleteAll = async () =>{
      const product = await cartServices.deleteAll();
      getItemsFromCart()
  }

  React.useEffect(()=>{
    getItemsFromCart()
  },[getItemsFromCart])

  
 
  return <CartContext.Provider value={{ cart,addToCart,deleteAll,getItemsFromCart,deleteProduct,updateItem}}>{children}</CartContext.Provider>
}
