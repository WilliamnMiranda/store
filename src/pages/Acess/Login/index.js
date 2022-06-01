import React from 'react'
import { Container, Tittle, ContainerFormulario, ContainerInput,ButtonSubmit, Recuperation, RecuperationText,
  SocialsLogins,SubTittle,ButtonSocial, ButtonFacebook,ButtonGoogle,ContainerButtons } from './style'
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
      <Recuperation>
        <RecuperationText>ESQUECI MEU LOGIN</RecuperationText>
        <RecuperationText>ESQUECI A MINHA SENHA</RecuperationText>
      </Recuperation>
      <SocialsLogins>
        <SubTittle>Quero acessar com minhas redes sociais</SubTittle>
        <ContainerButtons>
          <ButtonFacebook>Entrar com o Facebook</ButtonFacebook>
          <ButtonGoogle>Entrar com o Google</ButtonGoogle>
        </ContainerButtons>
      </SocialsLogins>
    </Container>
  )
}

export default Login