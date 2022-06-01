import React from 'react'
import { Container, Tittle, ContainerFormulario, ContainerInput,ButtonSubmit, Recuperation, RecuperationText,
  SocialsLogins,SubTittle,ButtonFacebook,ButtonGoogle,ContainerButtons } from './style'
  import InputValue from '../../../components/Form/input'
const Register = () => {
  return (
    <Container>
      <Tittle>QUERO ME CADASTRAR</Tittle>
      <ContainerFormulario>
        <ContainerInput>
          <InputValue placeholder={'E-mail *'}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue placeholder={'Crie sua senha *'} />
        </ContainerInput>
        <ContainerInput>
          <InputValue placeholder={'Confirme a senha *'}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue placeholder={'CPF ou CNPJ *'}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue placeholder={'CEP *'}/>
        </ContainerInput>
        <ButtonSubmit> ENTRAR </ButtonSubmit>
      </ContainerFormulario>
    </Container>
  )
}

export default Register