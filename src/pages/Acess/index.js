import React from 'react'
import Register from './Registro'
import Login from './Login'
import { GoPerson } from "react-icons/go";
import { ContainerAcesso, TituloAcesso, ContainerGeral } from './style'
const Access = () => {
  return (
    <ContainerAcesso>
      <TituloAcesso> <GoPerson /> IDENTIFICAÇÃO</TituloAcesso>
      <ContainerGeral>
        <Login />
        <Register />
      </ContainerGeral>
    </ContainerAcesso>
  )
}

export default Access