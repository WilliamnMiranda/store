import React from 'react'
import { DrawerContext } from '../../contexts/drawer'
import Drawer from '../../components/Drawer'
const Layout = ({children}) => {
const { statusMenu } = React.useContext(DrawerContext)
  return (
    <>
        {statusMenu && <Drawer />}
        {children}
    </>
  )
}

export default Layout