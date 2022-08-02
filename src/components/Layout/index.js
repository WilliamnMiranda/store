import React from 'react'
import { DrawerContext } from '../../contexts/drawer'
import Drawer from '../Drawer'
import { useLocation } from 'react-router-dom';
import { ContainerLayout } from './style'
import Header from '../header';
import { CartContext } from '../../contexts/cart';
const Layout = ({children}) => {
  const { statusMenu,setStatusMenu } = React.useContext(DrawerContext);
  React.useContext(CartContext)
  const {cart,getItemsFromCart} = React.useContext(CartContext)
  const location = useLocation();
  React.useEffect(() => {
    if (statusMenu) return setStatusMenu(false);
  }, [location]);
  return (
    <>
    {statusMenu && <Drawer />}
    <Header />
      <ContainerLayout>
        {children}
    </ContainerLayout>
    </>
  )
}

export default Layout