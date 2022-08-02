import React from 'react'
import cartServices from '../services/cart';
export const CartContext = React.createContext();

export const CartStore = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const att = () => {
    getItemsFromCart()
    getItemsFromCart()
  }
  const getItemsFromCart =async () => {
    const productsCart = await cartServices.get();
    setCart(productsCart);
  }

  const deleteProduct = async(id) => {
   cartServices.delete(id)
   att()
  }
  const addToCart = async (product) => {
    const checkItemCart = cart.some((item)=> item.product._id === product._id)
    if(checkItemCart) return 
    cartServices.post(product)
    att()
  }
  const updateItem = async (items) => {
    const newProducts = await cartServices.patch(items)
    att()
  }
  const deleteAll = async () =>{
      const product = await cartServices.deleteAll();
      att()
  }

  React.useEffect(()=>{
    getItemsFromCart()
  },[])
 
  return <CartContext.Provider value={{ cart,addToCart,deleteAll,getItemsFromCart,deleteProduct,updateItem}}>{children}</CartContext.Provider>
}
