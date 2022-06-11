import React from 'react'
import { Container,ContainerMenu, ContainerLista, ContainerLogo, ContainerInput, ContainerUser,IconMenu,Logo,ContainerLogin,
         ContainerLogoUser, ContainerAccess,ContainerIcons} from './style'
import { FiMenu } from "react-icons/fi";
import { ImUser } from "react-icons/im";
import { FaHeadset , FaShoppingCart ,FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {UserContext} from '../../../contexts/user'
const PrimaryHeader = () => {
  const {user,loading} = React.useContext(UserContext);
  return (
    <Container>
      <ContainerMenu>
        <ContainerLista>
          <ContainerLogo>
            <IconMenu> <FiMenu /> </IconMenu>
            <NavLink to='/'>Store</NavLink>
          </ContainerLogo>
          <ContainerInput>
            <input placeholder='Busque aqui' />
          </ContainerInput>
          <ContainerUser>
            <ContainerLogin>
                <ContainerLogoUser>
                  <ImUser/>
                </ContainerLogoUser>
                <ContainerAccess>
                  {loading === true ? <div>carregando</div> : user ? user.name : (
                    <>
                      <p>Faça <NavLink to='login'>Login</NavLink> ou</p>
                      <p>crie seu <bold><NavLink to='login'>Cadastro</NavLink></bold></p>
                    </>
                  )  
                  }
                </ContainerAccess>

                <ContainerIcons>
                  <FaHeadset />
                  <FaHeart />
                  <FaShoppingCart />
                </ContainerIcons>
            </ContainerLogin>
          </ContainerUser>
        </ContainerLista>
      </ContainerMenu>
    </Container>
  )
}

export default PrimaryHeader