import React from 'react'
import Register from './Registro'
import Login from './Login'
import { GoPerson } from "react-icons/go";
import { ContainerAcesso, TituloAcesso, ContainerGeral, Divisor } from './style'
import { UserContext } from '../../contexts/user';
import Loading from '../../components/Loading'
const Access = () => {
  const { loading } = React.useContext(UserContext);
  return (
    <ContainerAcesso>
      {loading && <Loading />}
      <TituloAcesso> <GoPerson /> IDENTIFICAÇÃO</TituloAcesso>
      <ContainerGeral>
        <Login />  
        <Divisor />
        <Register />
      </ContainerGeral>
    </ContainerAcesso>
  )
}

export default Access