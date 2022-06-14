import React from 'react'
import {ContainerDrawer,DrawerComponent,DrawerNav,DrawerList,TituloDrawer,CloseDrawer} from './style'
import { DrawerContext } from '../../contexts/drawer'
const Drawer = () => {
  const { setStatusMenu } = React.useContext(DrawerContext);
  return (
    <ContainerDrawer>
        <DrawerComponent>
            <CloseDrawer onClick={()=> setStatusMenu(false)}> X </CloseDrawer>
            <TituloDrawer>Ola.Faca seu login</TituloDrawer>
            <DrawerNav>
                <DrawerList>

                </DrawerList>
            </DrawerNav>
        </DrawerComponent>
    </ContainerDrawer>
  )
}

export default Drawer