import React from 'react'
import { DrawerContext } from '../../contexts/drawer'
import Drawer from '../Drawer'
import { useLocation } from 'react-router-dom';
import { ContainerLayout } from './style'
const Layout = ({children}) => {
  const { statusMenu,setStatusMenu } = React.useContext(DrawerContext);
  const location = useLocation();
  React.useEffect(() => {
    if (statusMenu) return setStatusMenu(false);
  }, [location]);

  return (
    <ContainerLayout>
        {statusMenu && <Drawer />}
        {children}
    </ContainerLayout>
  )
}

export default Layout