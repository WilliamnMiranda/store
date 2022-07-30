import React from 'react'
import Register from './Registro'
import Login from './Login'
import { GoPerson } from "react-icons/go";
import { ContainerAcess, TituloAcess, ContainerGeneral, Divider } from './style'
import { UserContext } from '../../contexts/user';
import Loading from '../../components/Loading'
const Access = () => {
  const { loading } = React.useContext(UserContext);
  return (
    <ContainerAcess>
      {loading && <Loading />}
      <TituloAcess> <GoPerson /> IDENTIFICAÇÃO</TituloAcess>
      <ContainerGeneral>
        <Login />  
        <Divider />
        <Register />
      </ContainerGeneral>
    </ContainerAcess>
  )
}

export default Access