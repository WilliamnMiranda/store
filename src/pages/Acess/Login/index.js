import React from 'react'
import { Container, Tittle, ContainerFormulario, ContainerInput,ButtonSubmit, Recuperation, RecuperationText,
  SocialsLogins,SubTittle, ButtonFacebook,ButtonGoogle,ContainerButtons} from './style'
import InputValue from '../../../components/Form/input'
import { UserContext } from '../../../contexts/user';
const Login = () => {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [user,setUser] = React.useState();
  const {login} = React.useContext(UserContext);
  const submit = async (e) => {
    e.preventDefault();
    login(email,password);
  }
  return (
    <Container>
      <Tittle>JÁ TENHO CADASTRO</Tittle>
      <ContainerFormulario onSubmit={submit}>
        <ContainerInput>
          <InputValue value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={'E-mail, CPF ou CNPJ *'}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue value={password} onChange={(e)=> setPassword(e.target.value)} placeholder={'Senha *'} />
        </ContainerInput>
        <ButtonSubmit type='submit'> ENTRAR </ButtonSubmit>
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