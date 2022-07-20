import React from 'react'
import {
  Container, ContainerMenu, ContainerLista, ContainerLogo, ContainerInput, ContainerUser, IconMenu, ContainerLogin,
  ContainerLogoUser, ContainerAccess, ContainerIcons
} from './style'
import { FiMenu } from "react-icons/fi";
import Badge from '@mui/material/Badge';
import { ImUser } from "react-icons/im";
import { FaHeadset, FaShoppingCart, FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../contexts/user'
import { DrawerContext } from '../../../contexts/drawer';
import { CartContext } from '../../../contexts/cart';
const PrimaryHeader = () => {
  const { user, loading } = React.useContext(UserContext);
  const { setStatusMenu } = React.useContext(DrawerContext);
  const { cart } = React.useContext(CartContext)
  return (
    <Container>
      <ContainerMenu>
        <ContainerLista>
          <ContainerLogo>
            <IconMenu onClick={() => setStatusMenu(true)}> <FiMenu /> </IconMenu>
            <NavLink to='/'>Store</NavLink>
          </ContainerLogo>
          <ContainerInput>
            <input placeholder='Busque aqui' />
          </ContainerInput>
          <ContainerUser>
            <ContainerLogin>
              <ContainerLogoUser>
                <ImUser />
              </ContainerLogoUser>
              <ContainerAccess>
                {loading === true ? <div>carregando</div> : user ? user.name : (
                  <>
                    <p>Faça <NavLink to='/login'>Login</NavLink> ou</p>
                    <p>crie seu <bold><NavLink to='login'>Cadastro</NavLink></bold></p>
                  </>
                )
                }
              </ContainerAccess>

              <ContainerIcons>
                <div style={{ marginRight: '20px' }}>
                  <FaHeadset />
                </div>
                <div style={{ marginRight: '20px' }}>
                  <FaHeart />
                </div>
                <Badge badgeContent={cart.length} color="secondary">
                  <FaShoppingCart />
                </Badge>
              </ContainerIcons>
            </ContainerLogin>
          </ContainerUser>
        </ContainerLista>
      </ContainerMenu>
    </Container>
  )
}

export default PrimaryHeader