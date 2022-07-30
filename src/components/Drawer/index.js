import React from "react";
import { NavLink } from 'react-router-dom'
import {
  FaUserAlt,
  FaShoppingCart,
  FaHeart,
  FaHeadset,
  FaHotjar,
  FaBolt,
  FaGem,
} from "react-icons/fa";
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
  Dividir,
} from "./style";
import { DrawerContext } from "../../contexts/drawer";
import { UserContext } from "../../contexts/user";
const Drawer = () => {
  const { setStatusMenu } = React.useContext(DrawerContext);
  const { user } = React.useContext(UserContext);
  return (
    <ContainerDrawer>
      <DrawerComponent>
        <CloseDrawer onClick={() => setStatusMenu(false)}> X </CloseDrawer>
        <TituloDrawer>Olá. Faça seu login</TituloDrawer>
        <DrawerNav>
          <DrawerList>
            <DrawerItem>
              <FaUserAlt /> Minha conta
            </DrawerItem>
            <NavLink to='/orders'>
              <DrawerItem>
                <FaShoppingCart /> Meus Pedidos
              </DrawerItem>
            </NavLink>
            <DrawerItem>

              <FaHeart /> Favoritos
            </DrawerItem>
            <DrawerItem>
              <FaHeadset /> Atendimento
            </DrawerItem>
            <Dividir />
            <DrawerItem>

              <FaHotjar /> Mais Procurados
            </DrawerItem>
            <DrawerItem>
              <FaBolt /> Oferta do dia
            </DrawerItem>
            <Dividir />
            <DrawerItem>
              <FaGem /> Seja Premium
            </DrawerItem>
            <ContainerLogin>
              {user ? (
                <ButtonLogin> SAIR </ButtonLogin>
              ) : (
                <NavLink to="/login">
                  <ButtonLogin> LOGIN </ButtonLogin>
                  <div> Cadastro </div>
                </NavLink>
              )}
            </ContainerLogin>
          </DrawerList>
        </DrawerNav>
      </DrawerComponent>
    </ContainerDrawer>
  );
};

export default Drawer;
