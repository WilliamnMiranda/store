import React from 'react'
import {ContainerDrawer,DrawerComponent,DrawerNav,DrawerList,TituloDrawer} from './style'
const Drawer = () => {
  return (
    <ContainerDrawer>
        <DrawerComponent>
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