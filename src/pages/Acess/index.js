import React from 'react'
import Register from './Registro'
import Login from './Login'
import { GoPerson } from "react-icons/go";
import { ContainerAcesso, TituloAcesso, ContainerGeral, Divisor } from './style'
const Access = () => {
  return (
    <ContainerAcesso>
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