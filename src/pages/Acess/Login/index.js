import React from 'react'
import { Container, Tittle, ContainerFormulario, ContainerInput,ButtonSubmit  } from './style'
import InputValue from '../../../components/Form/input'
const Login = () => {
  return (
    <Container>
      <Tittle>JÁ TENHO CADASTRO</Tittle>
      <ContainerFormulario>
        <ContainerInput>
          <InputValue placeholder={'E-mail, CPF ou CNPJ *'}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue placeholder={'Senha *'} />
        </ContainerInput>
        <ButtonSubmit> ENTRAR </ButtonSubmit>
      </ContainerFormulario>
    </Container>
  )
}

export default Login