import React from "react";
import { FaUserAlt,FaShoppingCart,FaHeart,FaHeadset, FaHotjar,FaBolt,FaGem } from "react-icons/fa";
import {
  ContainerDrawer,
  DrawerComponent,
  DrawerNav,
  DrawerList,
  TituloDrawer,
  CloseDrawer,
  DrawerItem,
  ButtonLogin,
  ContainerLogin,
} from "./style";
import { DrawerContext } from "../../contexts/drawer";
const Drawer = () => {
  const { setStatusMenu } = React.useContext(DrawerContext);
  return (
    <ContainerDrawer>
      <DrawerComponent>
        <CloseDrawer onClick={() => setStatusMenu(false)}> X </CloseDrawer>
        <TituloDrawer>Ola.Faca seu login</TituloDrawer>
        <DrawerNav>
          <DrawerList>
            <DrawerItem> <FaUserAlt /> Minha conta </DrawerItem>
            <DrawerItem> <FaShoppingCart /> Meus Pedidos </DrawerItem>
            <DrawerItem> <FaHeart /> Favoritos </DrawerItem>
            <DrawerItem> <FaHeadset /> Atendimento </DrawerItem>
            <DrawerItem> <FaHotjar/> Mais Procurados </DrawerItem>
            <DrawerItem> <FaBolt /> Oferta do dia </DrawerItem>
            <DrawerItem> <FaGem /> Seja Premium </DrawerItem>
            <ContainerLogin>
              <ButtonLogin> Login </ButtonLogin>
              <div> Cadastro </div>
            </ContainerLogin>
          </DrawerList>
        </DrawerNav>
      </DrawerComponent>
    </ContainerDrawer>
  );
};

export default Drawer;
